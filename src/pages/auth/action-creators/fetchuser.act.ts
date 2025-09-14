// import type { AppDispatch } from "@/common/hooks/useAppDispatch";

// export const fetchUserAct = () => {
//   return async (dispatch: AppDispatch) => {
//     const authToken = localStorage.getItem("authToken");
//     if (!authToken) return false;
//     try {
//       const response = await fetchUser();
//       const { user } = response.data;
//       dispatch(authenticate({ user, authToken }));
//     } catch (error) {
//       dispatch(logout());
//       throw error;
//     }
//   };
// };
