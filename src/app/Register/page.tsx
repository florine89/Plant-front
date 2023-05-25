import Link from "next/link";
import { prisma } from "@/lib";
import { redirect } from "next/navigation";

import bcrypt from "bcrypt";

// hash le mot de passe à l'inscription
// async function hashPass(unHashPass: string) {
//   return bcrypt.hash(unHashPass, 10).then(function(hash: string) {
//     return hash;
//   });
// }

// compare les mots de passe pour la connexion
// function isSamePass(unHashPass : string, hashPass: string){
//   return bcrypt.compare(unHashPass, hashPass).then(function(result: boolean){
//     return result;
//   })
// }

async function createUser(data: FormData) {
  "use server"

  const firstname = data.get("firstname")?.valueOf();
  if (typeof firstname !== "string" || firstname.length === 0) {
      throw new Error ("Invalid firstname")
  }

  const lastname = data.get("lastname")?.valueOf();
  if (typeof lastname !== "string" || lastname.length === 0) {
      throw new Error ("Invalid lastname")
  }

  const city = data.get("city")?.valueOf();
  if (typeof city !== "string" || city.length === 0) {
      throw new Error ("Invalid city")
  }
  
  const email = data.get("email")?.valueOf();
  if (typeof email !== "string" || email.length === 0) {
    throw new Error ("Invalid email")
  }
  

  const password = await bcrypt.hash(`${data.get("password")?.valueOf()}`, 10);

  if (typeof password !== "string" || password.length === 0) {
      throw new Error ("Invalid password")
  }

  await prisma.user.create({ data: { firstname, lastname, email, password, city }})
  redirect("/")
}

function Register() {
  return (
    <form action={createUser}>
    <input placeholder="firstname" type='text' name="firstname" className="border border-slate-600 rounded px-2 py-1 outline-none m-2"/>
    <input placeholder="lastname" type='text' name="lastname" className="border border-slate-600 rounded px-2 py-1 outline-none m-2"/>
    <input placeholder="city" type='text' name="city" className="border border-slate-600 rounded px-2 py-1 outline-none m-2"/>
    <input placeholder="password" type='password' name="password" className="border border-slate-600 rounded px-2 py-1 outline-none m-2"/>

    <input placeholder="email" type='email' name="email" className="border border-slate-600 rounded px-2 py-1 outline-none m-2"/>

    <div className="flex gap-1 justify-start m-2">
        <Link href=".." className="border border-slate-500 rounded px-2 py-1">Cancel</Link>
        <button type="submit" className="border border-slate-500 rounded px-2 py-1">Test</button>
    </div>
</form>
  )
}

export default Register;