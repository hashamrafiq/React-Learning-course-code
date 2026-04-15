import "../assets/hooks.css";

function Card({username, description, linkText, mailText, contectForm="Default Value"}) {
  return (
    <>
<div className="w-150 mx-auto rounded overflow-hidden shadow-xl my-4 ">
  {/* <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8StjC4xQ7zpaIewfL2IiCfsMEa67F6j1Qmw&s" alt="Sunset in the mountains" /> */}
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{username}</div>
    <p className="text-gray-700 text-base">
      {description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{linkText}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{mailText}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{contectForm}</span>
  </div>
</div>

    </>
  );
}
export default Card;
