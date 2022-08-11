import { projectsData } from "../../data/projects-data";

export function Projects() {
  return (
    <div>
      <h2 className="text-4xl mt-4 mb-8">My Projects</h2>
      <ul>
        {projectsData.map((item) => (
          <li key={item.id} className="p-4 m-4 border rounded-md shadow-md" >
            <iframe
              className="w-full aspect-video"
              src={item.video}
              title={item.name}
              frameBorder="0"
              allow="autoplay"
            />

            <div className="mt-8">
              <h3 className="text-2xl">
                {item.name} - {item.app}
              </h3>
              <div className="my-4">
                <a
                  className="border capitalize px-4  py-1 rounded-3xl  bg-orange-500 text-xl text-white hover:bg-orange-600"
                  target="blank"
                  href={item.live}
                >
                  live site
                </a>{" "}
                <a
                  className="border capitalize px-4 py-1 rounded-3xl text-gray-500 text-xl hover:border-orange-600"
                  target="blank"
                  href={item.github}
                >
                  source code
                </a>
              </div>
              <ul className="text-2xl flex flex-wrap">
                {item.techStack.map((ele) => (
                  <li className="border  rounded-2xl text-sm px-2 bg-gray-200 mt-2 mr-2" key={ele}>
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
