// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form'
// import { useForm } from 'react-hook-form'
// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'

// type Input = z.infer<typeof registerSchema>

// export default function RegisterForm() {
//   const form = useForm<Input>({
//     resolver: zodResolver(registerSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//   })

//   const navigate = useNavigate()
//   const dispatch = useAppDispatch()
//   const { user, isLoading, isError, isSuccess, message } = useAppSelector(
//     (state) => state.auth,
//   )

//   // Navigate to Dashboard upon successful registration
//   useEffect(() => {
//     if (isSuccess || user) {
//       navigate('/dashboard')
//     }
//     dispatch(reset())
//   }, [user, isError, isSuccess, message, navigate, dispatch])

//   function onSubmit(data: Input) {
//     dispatch(register(data))
//   }

//   return (
//     //center it
//     <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Register</CardTitle>
//           <CardDescription>Get started today.</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Username</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter your username"
//                         {...field}
//                         type="name"
//                         autoComplete="username"
//                       />
//                     </FormControl>
//                     <FormDescription>
//                       This is your account and display name.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter your email"
//                         {...field}
//                         type="email"
//                         autoComplete="email"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Password</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter your password"
//                         {...field}
//                         type="password"
//                         // for registration form (login page uses autoComplete="current-password")
//                         autoComplete="new-password"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="confirmPassword"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Confirm Password</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Please confirm your password"
//                         {...field}
//                         type="confirmPassword"
//                         autoComplete="new-password"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button type="submit">Submit</Button>
//             </form>
//           </Form>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
