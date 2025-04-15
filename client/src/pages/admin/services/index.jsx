import { useEffect, useState } from "react";
import Card from "../../../components/landing/main/card";
import { useAuth } from "../../../context/context";
import { getUser } from "../../../utils/services/user";
import Loading from "../../../components/loading";

const AdminProfile = () => {
  const { user } = useAuth();
  console.log("JS");

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const profile = await getUser(user._id);

      // console.log("Profile", profile.user);

      setUserProfile(profile.user);
    };

    fetchUser();
  }, [user]);

  const cards = [
    {
      title: "Go to Dashboard",
      link: "/admin/dashboard",
      image: "/cards/buy.jpg",
    },
  ];

  if (!userProfile) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center p-8 gap-16">
      <div className="flex flex-col gap-2">
        <h1
          style={{
            fontFamily: "SuperBrigadeTitle",
            letterSpacing: "-0.2rem",
          }}
          className="text-5xl md:text-6xl text-center font-bold"
        >
          Admin Dashboard
        </h1>
        <h4
          style={{
            fontFamily: "Poppins",
          }}
          className="text-center italic"
        >
          Welcome to Admin Dashboard. Here you can view all the cars available
          for rent and sale
        </h4>
        <div
          className="flex flex-col gap-2 font-bold border-2 py-4 m-4 text-2xl italic border-solid bolder-black rounded-md items-center"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          <div>Name :- {userProfile?.name}</div>
          <div>Email :- {userProfile?.email}</div>
          <div>
            Bookings :- {userProfile.bookings ? userProfile.bookings.length : 0}
          </div>
        </div>
      </div>
      <div className="flex justify-content-center">
        <Card item={cards[0]} />
      </div>
    </div>
  );
};

export default AdminProfile;
