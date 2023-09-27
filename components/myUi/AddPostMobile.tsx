import { Feather, MailPlus } from "../../node_modules/lucide-react";

interface AddPostMobileProps {
  type?: string;
}

const AddPostMobile: React.FC<AddPostMobileProps> = ({ type }) => {
  return (
    <div className="sticky left-0">
      <div className="p-4 w-16 h-16 flex justify-center items-center rounded-full bg-sky-500">
        {type === "message" ? <MailPlus /> : <Feather />}
      </div>
    </div>
  );
};

export default AddPostMobile;
