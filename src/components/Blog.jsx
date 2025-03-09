import Heading from "./sub/Heading";

const Blog = () => {
  return (
    <div id="blog" className="min-h-screen grid flex-col items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading text={"From the Blog"} />
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" className="text-gray-500 dark:text-gray-400">
                Mar 16, 2020
              </time>
              <a
                href="#"
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Marketing
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-200">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Boost your conversion rate
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed
                exercitationem placeat consectetur nulla deserunt vel. Iusto
                corrupti dicta.
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-10 rounded-full bg-gray-50 dark:bg-gray-700"
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Michael Foster
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-400">Co-Founder / CTO</p>
              </div>
            </div>
          </article>

          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" className="text-gray-500 dark:text-gray-400">
                Mar 16, 2020
              </time>
              <a
                href="#"
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Marketing
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-200">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Boost your conversion rate
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed
                exercitationem placeat consectetur nulla deserunt vel. Iusto
                corrupti dicta.
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-10 rounded-full bg-gray-50 dark:bg-gray-700"
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Michael Foster
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-400">Co-Founder / CTO</p>
              </div>
            </div>
          </article>

          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" className="text-gray-500 dark:text-gray-400">
                Mar 16, 2020
              </time>
              <a
                href="#"
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Marketing
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-200">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Boost your conversion rate
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed
                exercitationem placeat consectetur nulla deserunt vel. Iusto
                corrupti dicta.
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-10 rounded-full bg-gray-50 dark:bg-gray-700"
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Michael Foster
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-400">Co-Founder / CTO</p>
              </div>
            </div>
          </article>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
