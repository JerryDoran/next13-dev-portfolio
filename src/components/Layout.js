export default function Layout({ children, className = '' }) {
  return (
    <div
      className={`${className} w-full h-full inline-block z-0 bg-light dark:bg-dark p-4 sm:p-12 md:pt-16 lg:p-24 xl:p-32`}
    >
      {children}
    </div>
  );
}
