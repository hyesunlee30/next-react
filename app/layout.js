import './globals.css';
import MainHeader from "@/components/main-header/main-header";

// metadata 수정시 이 layout이 감싸고 있는 모든 곳에 적용된다.
// page 에 metadata 가 들어가면 page 가 더 우선순위가 높다
// static matadata
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
