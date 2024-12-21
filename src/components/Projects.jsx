const Projects = () => {
  return (
    <>
      <section id="projects" className="section bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Projects
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">E-commerce Clothing Website</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                <li>
                  Created a fully responsive e-commerce website for a fictional
                  clothing store.
                </li>
                <li>
                  Implemented organized product sections to display clothing
                  items, images, and descriptions effectively.
                </li>
                <li>
                  Designed an intuitive and clean layout to ensure smooth
                  navigation and accessibility.
                </li>
              </p>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">AI Trash Detection Website</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                <li>
                  Developed an AI-powered web platform that classifies waste
                  items as recyclable or non-recyclable in real-time.
                </li>
                <li>
                  Integrated a machine learning model for accurate waste
                  identification.
                </li>
                <li>
                  Designed a user-friendly interface with educational content to
                  promote sustainable waste management.
                </li>
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
