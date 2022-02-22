import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return;
    }
  }, []);

  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="px-16 pt-32">
        <h5 className="text-xl font-bold">Bookings</h5>
        <p>See upcoming and past events booked through your event type links.</p>
        <div className="flex gap-4 mt-16">
          <div className="flex-none font-bold underline">
            <a href="#">Upcoming</a>{" "}
          </div>
          <div className="flex-none">
            <a href="#">Past</a>
          </div>
          <div className="flex-none">
            <a href="#">Cancelled</a>
          </div>
        </div>
        <div className="flex w-full gap-16 p-4 mt-8 bg-white border border-gray-400">
          <div className="flex-none">
            <p>Wed, 29 Dec</p>
            <p className="text-gray-500">16:30 - 16:45</p>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex-none">
              <p className="font-bold">15 minutes between Daniel Tonel and Test</p>
              <p className="text-gray-500">Some text here</p>
              <p>user@cal.com</p>
            </div>
            <div className="flex-none">
              <div className="flex gap-8">
                <div className="flex gap-2 px-2 py-1 border border-gray-200">
                  <CloseIcon />
                  <h4>Cancel</h4>
                </div>
                <div className="flex gap-2 px-2 py-1 border border-gray-200">
                  <AccessTimeIcon />
                  <h4>Reschedule</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid mt-8 place-items-center">
          <div className="p-2 bg-gray-400">
            <p className="text-white">No More Results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
