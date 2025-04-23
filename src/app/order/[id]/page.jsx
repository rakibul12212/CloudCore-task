import PlaceOrder from "@/component/UI/PlaceOrder";

const OrderPage = ({ params }) => {
  return (
    <div className="p-6">
      <PlaceOrder productId={params.id} />
    </div>
  );
};
export default OrderPage;
