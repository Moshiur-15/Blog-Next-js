import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/dist/server/api-utils";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return <p className="text-xl text-center my-24">You are not authenticated. Please log in to view your profile.</p>
  }

  return (
    <div className="flex items-center justify-center translate-y-1/2">
      <div className="py-10 p-6 font-serif border max-w-xl rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome to your profile!</h1>
        <h1 className="text-base font-bold mb-4">Hello {user && user?.given_name && user?.family_name}!</h1>
      </div>
    </div>
  );
};

export default Profile;
