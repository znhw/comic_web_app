'use client';
import { useAuth } from "../../utils/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in...");

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const password = formData.get('password');

        login(username, password);

        console.log("Login successful!", username , password);

        router.push('/');
    };

    return (
        <div>
            <h1>Log in Page</h1>
            <form onSubmit={handleLogin}>
                <input 
                    name="username"
                    type="text" 
                    placeholder="Username" 
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password"  
                />
                <button type="submit">Login</button>

            </form>
        </div>
    );
}   