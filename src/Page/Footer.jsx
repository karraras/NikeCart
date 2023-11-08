// const footerAPI = {
//     titles: [
//       { title: "About Nike" },
//       { title: "Get Help" },
//       { title: "Company" },
//     ],
//     links: [
//       [
//         { link: "News" },
import { footerAPI } from "../context/Data";
function Footer() {
  return (
    <div
      className=" bg-gradient-to-r
      from-blue-900 to-blue-500
      p-4
      text-white
      flex justify-center
      "
    >
      <div className="max-w-[600px] w-[600px]">
        <div className="grid grid-cols-3">
          {footerAPI.titles.map((item, index) => {
            return (
              <p
                key={index}
                className="text-sm font-bold w-[110px] text-left"
              >
                {item.title}
              </p>
            );
          })}
        </div>
        <div className="grid grid-cols-3">
          {footerAPI.links.map((item, index) => {
            return (
              <div key={index}>
                {item.map((item, index) => {
                  return (
                    <p className="text-[12px] text-left w-[110px]" key={index}>
                      {item.link}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
