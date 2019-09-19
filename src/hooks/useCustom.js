import { useState, useEffect } from 'react'

let listeners = [];
let state = { counter: 0, name: 'abc' }

const setState = (newState) => {
  state = {...state, ...newState}
  listeners.forEach((listener) => {
    listener(state)
  })
}

const useCustom = () => {
  const newListener = useState()[1] // useState: [state, setState]

  useEffect(() => {
    listeners.push(newListener)
    return () => {
      listeners = listeners.filter(listener => listener !== newListener)
    }
  }, [newListener])
  return [state, setState]
}

const associateActions = (store, actions) => {
  const associatedActions = {}

  Object.keys(actions).forEach(key=>{
    if(typeof actions[key] === 'function') {
      associatedActions[key] = actions[key].bind(null, store)
    }
    if(typeof actions[key] === 'object') {
      associatedActions[key] = associateActions(store,actions[key])
    }
  })
  return associatedActions;
}

const useGlobalHook = (React, initialState, actions) => {
  const store = { state: initialState, listeners: [] }

  store.setState = setState.bind(store)
  store.actions = associateActions(store, actions)

  return useCustom.bind(store, React)
}

export default useGlobalHook
