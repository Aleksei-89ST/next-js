import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ой</h1>
      <h2>Такой страницы здесь нет!</h2>
      <p>
        Перехожу на
        <Link href="/">
          <a>главную страницу через 3 секунды...</a>
        </Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
