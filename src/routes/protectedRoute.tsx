// import React, { useEffect } from 'react'
// import { useNavigate, Outlet } from 'react-router-dom'
// import { useUserStore } from '../libs/zustand/userStore'
// import { Profile } from '@/types/Api/profileType'
// import { ResponseType } from '@/types/Api/responseType'
// import { getProfileForMyId } from '@/services/profileService'
// type Props = { children: React.ReactNode }

// const ProtectedRoute = ({ children }: Props) => {
//   const navigate = useNavigate()
//   const user = useUserStore((state) => state.user)
//   const { checkUserLogin, checkTokenValidation } = useUserStore()

//   useEffect(() => {
//     const checkLogin = async () => {
//       const isLogged = await checkUserLogin()
//       if (!isLogged) {
//         navigate('/login')
//       }
//     }
//     if (!user?.userIsLogged) {
//       checkLogin()
//     }
//   })

//   /** Como el usuario tiene un perfil cada vez que se crea uno, debe actualizarlo al menos uan vez para que pueda usar la app */

//   useEffect(() => {
//     console.log('Verificando si el perfil esta completo')
//     const getMyProfile = async () => {
//       const token = await checkTokenValidation()
//       if (token != null) {
//         const response = (await getProfileForMyId(
//           token
//         )) as ResponseType<Profile>
//         if (response.status === 200) {
//           if (!response.data.isCompleted) {
//             navigate('/dashboard/my-profile')
//           }
//         } else {
//           navigate('/errorPage')
//         }
//       } else {
//         navigate('/login')
//       }
//     }
//     getMyProfile()
//   }, [checkTokenValidation, navigate])

//   /**Si el usuario está autenticado, muestra los hijos del componente */
//   if (user.userIsLogged) {
//     if (children) {
//       return children
//     } else {
//       return <Outlet></Outlet>
//     }
//   }
//   return user.userIsLogged ? <>{children}</> : null
// }

// export default ProtectedRoute
