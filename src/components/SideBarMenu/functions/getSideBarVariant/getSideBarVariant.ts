import { SideBarStyle } from "../../styles"

export const getSideBarVariant = (shouldOpenSideBar: boolean | null): SideBarStyle => {
    if (shouldOpenSideBar == null) return SideBarStyle.InitialState
    return shouldOpenSideBar ? SideBarStyle.Open : SideBarStyle.Close
}
