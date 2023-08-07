import { SideBarStyle } from "../../styles";
import { getSideBarVariant } from "./getSideBarVariant"

describe("getSideBarVariant", () => {
    it("If the param is 'true', the return should be 'SideBarStyle.Open'", () => {
        const result = getSideBarVariant(true);
        expect(result).toBe(SideBarStyle.Open)
    })

    it("If the param is 'false', the return should be 'SideBarStyle.Close'", () => {
        const result = getSideBarVariant(false);
        expect(result).toBe(SideBarStyle.Close)
    })

    it("If the param is 'null', the return should be 'SideBarStyle.InitialState'", () => {
        const result = getSideBarVariant(null);
        expect(result).toBe(SideBarStyle.InitialState)
    })
})