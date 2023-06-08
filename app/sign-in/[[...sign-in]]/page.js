import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center gap-14 pt-16">
            <h1 className="font-bold text-4xl">Entrar</h1>
            <SignIn />
        </div>
    )
}
