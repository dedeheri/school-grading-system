import { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Button from "../../components/Button";
import Input from "../../components/Input";
import UpdateSkeleton from "../../components/UpdateSkeleton";
import { REMOVE_DETAIL_CLASSROOM } from "../../context/action/action-type";
import {
  setDetailClass,
  setTeacher,
  setUpdateClass,
} from "../../context/action/staff-action";

import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
function UpdateClass() {
  const {
    data: classRooms,
    dataUpdate,
    update,
    loadingBar,
    error,
    isFetchingUpdate,
  } = useSelector((state) => state.classRoomList);
  const { data, isFetching } = useSelector((state) => state.teacher);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setDetailClass(search));
    dispatch(setTeacher("?sort?-1"));

    return () => {
      dispatch({ type: REMOVE_DETAIL_CLASSROOM });
    };
  }, []);

  const [homeRoomTeacher, setHomeRoomTeacher] = useState("");
  const [classRoom, setClassRoom] = useState("");

  useEffect(() => {
    setHomeRoomTeacher(dataUpdate?.result?.homeRoomTeacher);
    setClassRoom(dataUpdate?.result?.classRoom);
  }, [dataUpdate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(setUpdateClass(search, homeRoomTeacher, classRoom));
    if (update?.message == "Success") {
      navigate("/staff/class");
    }
  };

  console.log(data);

  return (
    <div className="md:pl-52 pt-10 mx-4">
      <LoadingBar
        loaderSpeed={1000}
        color="#000000"
        height={3}
        progress={loadingBar}
      />
      {isFetchingUpdate ? (
        <UpdateSkeleton />
      ) : (
        <>
          {error &&
            error.map((er, i) => (
              <span className="text-red-500" key={i}>
                {er.msg}
              </span>
            ))}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Listbox value={homeRoomTeacher} onChange={setHomeRoomTeacher}>
              <div className="relative">
                <div className="block text-lg mb-1 font-medium text-gray-700 font-roboto">
                  Wali Kelas
                </div>
                <Listbox.Button className="relative h-11 w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">
                    {isFetchingUpdate ? "Loading..." : homeRoomTeacher}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full z-50 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-xl max-h-80 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {classRooms?.result?.map((cls, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `${
                            active
                              ? "text-gray-900 bg-gray-100"
                              : "text-gray-900"
                          }
                          cursor-default select-none relative py-2 pl-4 pr-4`
                        }
                        value={cls.homeRoomTeacher}
                      >
                        {({ active }) => (
                          <>
                            <span
                              className={`${
                                active ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {cls.homeRoomTeacher}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <Input
              onChange={(e) => setClassRoom(e.target.value)}
              value={classRoom || ""}
              width={"w-full"}
              title={"Kelas"}
            />
          </div>
          <div className="md:flex md:space-x-2 justify-end space-y-2 mt-10 md:mt-4 md:space-y-0">
            <Button
              onClick={handleUpdate}
              width={"md:w-52 w-full"}
              title={"Edit"}
              type="submit"
            />
            <Button
              onClick={() => navigate("/staff/class")}
              width={"md:w-52  w-full"}
              title={"Batal"}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default UpdateClass;
