"use client";

// Import các thành phần và thư viện cần sử dụng
import { Button } from "@/components/ui/button"; // Import Button từ thư mục components/ui/button
import useCartStore from "@/hooks/use-cart"; // Sử dụng custom hook useCartStore từ thư mục hooks/use-cart
import { formatter } from "@/lib/utils"; // Import hàm formatter từ thư mục lib/utils
import axios from "axios"; // Import thư viện axios để thực hiện HTTP requests
import { useSearchParams } from "next/navigation"; // Import hook useSearchParams từ thư viện next/navigation
import { useEffect } from "react"; // Import hook useEffect từ thư viện react
import toast from "react-hot-toast"; // Import thư viện toast từ react-hot-toast

// Khai báo component CheckoutForm
const CheckoutForm = () => {
  // Sử dụng custom hook để lấy thông tin giỏ hàng
  const cart = useCartStore();
  // Sử dụng hook useSearchParams để lấy thông tin từ URL query parameters
  const searchParams = useSearchParams();

  // Sử dụng useEffect để xử lý khi component được mount hoặc có sự thay đổi trong searchParams và cart.removeAllItems
  useEffect(() => {
    // Kiểm tra nếu có query parameter "success", hiển thị thông báo thanh toán thành công và xóa tất cả sản phẩm trong giỏ hàng
    if (searchParams.get("success")) {
      toast.success("Thanh toán thành công!");
      cart.removeAllItems();
    }

    // Kiểm tra nếu có query parameter "canceled", hiển thị thông báo thanh toán thất bại
    if (searchParams.get("canceled")) {
      toast.error("Thanh toán thất bại!");
    }
  }, [searchParams, cart.removeAllItems]);

  // Tính tổng số tiền cần thanh toán từ các sản phẩm trong giỏ hàng
  const total = cart.items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  // Xử lý khi người dùng click nút "Thanh toán"
  const onCheckout = async () => {
    // Gửi POST request đến API để thực hiện thanh toán
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: cart.items.map((item) => item.id),
      }
    );
    console.log(response);

    // Chuyển hướng đến URL được trả về từ server để hoàn thành quá trình thanh toán
    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className=" text-lg font-medium text-gray-900">Tổng thanh toán</h2>
      <div className=" space-y-4 mt-6">
        <div className=" flex items-center justify-between border-t border-gray-200 pt-4">
          <div className=" text-base font-medium text-gray-900">
            Tổng số tiền:
          </div>
          {formatter.format(total)}
        </div>
      </div>
      <Button onClick={onCheckout} className=" w-full mt-6">
        Thanh toán
      </Button>
    </div>
  );
};

export default CheckoutForm;
