import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>Ой</h1>
      <h2>Такой страницы здесь нет!</h2>
      <p>
        Прейти на
        <Link href="/">
          <a>главную страницу</a>
        </Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
