import { HeartIcon } from "@heroicons/react/outline";

function Footer() {
  const getDay = new Date().getFullYear();
  return (
    <div className="border-t mt-10">
      <div className="max-w-[104rem]">
        <div className="flex items-center justify-end p-3">
          Copyrigth {getDay}. Build with
          <span>
            <HeartIcon className="w-5" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
