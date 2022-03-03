import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setDetailTeacher,
  setUpdateTeacher,
} from "../../context/action/staff-action";
import UpdateSkeleton from "../../components/UpdateSkeleton";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LoadingBar from "react-top-loading-bar";
function UpdateTeacher() {
  const {
    detail,
    dataUpdate,
    isFetchingUpdate,
    loadingBar,
    errorValidationUpdate,
  } = useSelector((state) => state.teacher);

  console.log(detail);

  const router = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(setDetailTeacher(search));
  }, []);

  const [fullName, setFullName] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [status, setStatus] = useState("");
  const [street, setStreet] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [postelCode, setPostelCode] = useState("");

  useEffect(() => {
    setIdentityNumber(detail?.result?.identityNumber);
    setFullName(detail?.result?.fullName);
    setStatus(detail?.result?.status);
    setStreet(detail?.result?.address?.street);
    setProvince(detail?.result?.address?.province);
    setCity(detail?.result?.address?.city);
    setPostelCode(detail?.result?.address?.postelCode);
  }, [detail]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      setUpdateTeacher(
        search,
        fullName,
        status,
        province,
        city,
        street,
        postelCode
      )
    );
    if (dataUpdate?.message == "Success") return router("/staff/teacher");
  };

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
            <Input
              value={fullName || ""}
              title={"Nama Lengkap"}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              title={"Nomber Indititas"}
              defaultValue={identityNumber}
              readOnly
            />
            <Input
              title={"Status"}
              defaultValue={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <Input
              title={"Jalan"}
              defaultValue={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Input
              title={"Kota"}
              defaultValue={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              title={"Provinsi"}
              defaultValue={province}
              onChange={(e) => setProvince(e.target.value)}
            />
            <Input
              title={"Kode Pos"}
              defaultValue={postelCode}
              onChange={(e) => setPostelCode(e.target.value)}
            />
          </div>
          <div className="md:flex md:space-x-2 justify-end space-y-2 mt-10 md:mt-4 md:space-y-0 mb-4">
            <Button
              width={"md:w-52 w-full"}
              title={"Edit"}
              onClick={handleUpdate}
            />
            <Button
              width={"md:w-52 w-full"}
              title={"Batal"}
              onClick={() => router("/staff/teacher")}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default UpdateTeacher;
