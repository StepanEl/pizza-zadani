import { createContext, useContext } from "react";

export type PrefsStructure = {
    veganOnly: boolean,
}

export const PrefsContext = createContext<PrefsStructure> (null!)

export const usePrefs = () => useContext(PrefsContext)