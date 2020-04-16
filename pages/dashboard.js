import Link from "next/link";
import useAuth from "../hooks/useAuth";
import AuthService from "../services/auth";
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default (props) => {
    const router = useRouter()
    const user = useAuth(props.user);

    useEffect(() => {
        if (!user._id) {
            router.push('/login')
        }
    }, [])

    return (
        <>
            <h1>
                {`Welcome to Dashboard, ${user.name}`}
            </h1>
            <Link href="/">
                <button>Go Home</button>
            </Link>
        </>
    );
};

// NODE JS CODE
export async function getServerSideProps(context) {
    return {
        props: {
            user: await AuthService.getUserFromCookie(context.req),
        },
    };
}
