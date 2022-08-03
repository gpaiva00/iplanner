interface HomeHeaderProps {
  showLoginButton?: boolean;
}

export default function HomeHeader(props: HomeHeaderProps) {
  const { showLoginButton = true } = props;

  return (
    <div className="w-full flex justify-between items-center px-10 py-5">
      <a href="/" className="header-title">
        iPlanner
      </a>
      {showLoginButton && (
        <span>
          <a
            href="/login"
            className="bg-transparent border border-primary text-primary h-10 py-2 px-4 rounded transition-colors hover:bg-primary hover:text-white"
          >
            Login
          </a>
        </span>
      )}
    </div>
  );
}
