import type { RootState } from "@/store/store";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

export type AppSelector = TypedUseSelectorHook<RootState>;
export const useAppSelector: AppSelector = useSelector;
