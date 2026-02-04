"Use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { AuthClient } from "better-auth/client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export const LoginForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-4">
                <Image src="/login.svg" alt="Logo" width={500} height={500} />
                <h1 className="text-6xl font-extrabold text-blue-400">Welcome to Orbital</h1>
                <p className="text-center text-gray-600 text-zinc-400">Please log in to continue</p>
            </div>
            <Card className="border-dashed border-2 border-gray-300">
                <CardContent >
                    <div className="grid gap-6"></div>
                    <div className="flex flex-col gap-4">
                        <Button
                            variant="outline"
                            className="w-full h-full"
                            type="button"
                            onClick={() => authClient.signIn.social(
                                {
                                    provider: "github",
                                    callbackURL: "http://localhost:3001"
                                }
                            )}
                        >
                            <Image
                                src="/GitHub_Invertocat_Black.svg"
                                alt="GitHub"
                                width={20}
                                height={20}
                                className="size-4 dark:invert mr-2"
                            />
                            Countinue With GitHub
                        </Button>
                    </div>
                </CardContent>
            </Card>
            
        </div>
    );
};