import Accordion from "../Components/ui/Accordion";
import Reveal from "../Components/utils/Reveal";

function Projects() {
  return (
    <>
      <div className="px-5 py-10 flex flex-col justify-center min-h-[90vh]">
        <div className="flex justify-between w-full text-xs dark:text-secondary-dark text-secondary-light px-2 py-1">
          <h1>PROJECT</h1>
          <h1>CATEGORY</h1>
        </div>
        <Accordion
          items={["Placeholder", "Placeholder"]}
          body={
            <div>
              <span className="text-base dark:text-secondary-dark text-secondary-light font-bold">
                PLACEHOLDER
              </span>
              <div className="space-y-5">
                <p>Placeholder</p>
                <div className="flex flex-wrap gap-2">
                  <Reveal
                    component={
                      <img
                        className="max-h-[300px] object-scale-down"
                        // src={}
                      ></img>
                    }
                  />
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
}

export default Projects;
