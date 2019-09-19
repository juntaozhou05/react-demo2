import React from 'react'
import useGlobalHook from './useGlobalHook'

const initialState = { counter: 0 }

const useGlobal = useGlobalHook(React, initialState)

export default useGlobal
