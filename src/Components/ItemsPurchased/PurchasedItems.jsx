import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteItem,
} from "../redux/CartSlices";
import DeleteIcon from "@mui/icons-material/Delete";

const PurchasedItems = () => {
  const coupon1 = 10;
  const coupon2 = 20;
  const coupon3 = 40;
  const [showCoupon1, setShowCoupon1] = useState(false);
  const [showCoupon2, setShowCoupon2] = useState(false);
  const [showCoupon3, setShowCoupon3] = useState(false);
  const [showEdit, setshowEdit] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const items = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const totalPrice = items.reduce(
    (acc, prod) => 15 + acc + prod.price * prod.quantity,
    0
  );
  return (
    <>
      {totalPrice > 0 ? (
        <div className="flex flex-col md:flex-row  md:mr-4">
          <div id="left" className="flex-grow p-4">
            <h2 className="text-2xl font-semibold mb-4">Purchased Items</h2>
            <table className="min-w-full bg-white border border-gray-300 shadow-md">
              <thead>
                <tr>
                  <th className="py-2 px-2 border-b">Product Details</th>
                  <th className="py-2 px-2 border-b">Price</th>
                  <th className="py-2 px-2 border-b">Quantity</th>
                  <th className="py-2 px-2 border-b"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((prod, index) => (
                  <motion.tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-gray-100 hover:bg-gray-200"
                        : "hover:bg-gray-100"
                    }
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="py-2 px-4 border-b">
                      <div className="flex items-center">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <div className="ml-4">
                          <div className="text-lg font-semibold">
                            {prod.name}
                          </div>

                          <div className="text-sm text-gray-500">
                            Size: {prod.size}, Color: {prod.color}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-2 px-2 border-b">
                      <div className="flex items-center justify-center">
                        ${prod.price.toFixed(2)}
                      </div>
                    </td>
                    <td className="py-2 px-2 border-b">
                      <div className="flex items-center justify-center">
                        {selectedItems.includes(index) ? (
                          <>
                            <div className="flex gap-5">
                              <button
                                onClick={() => dispatch(DecreaseQuantity(prod))}
                              >
                                -
                              </button>
                              <p>{prod.quantity}</p>
                              <button
                                onClick={() => dispatch(IncreaseQuantity(prod))}
                              >
                                +
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <select
                              onChange={(e) => {
                                if (e.target.value === "Edit") {
                                  setshowEdit(true);
                                  setSelectedItems([...selectedItems, index]);
                                }
                              }}
                            >
                              <option value="0">{prod.quantity}</option>
                              <option value="Edit">Edit</option>
                            </select>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="py-2  border-b">
                      <DeleteIcon
                        onClick={() => dispatch(DeleteItem(prod))}
                        className="cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-100 rounded-full transition-all duration-300 transform hover:scale-110"
                      />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id="right" className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Total</h2>
            <table className="min-w-full bg-white border border-gray-300 shadow-md">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 border-b">Subtotal</td>
                  <td className="py-2 px-4 border-b"></td>
                  <td className="py-2 px-4 border-b"></td>
                  <td className="py-2 px-4 border-b font-semibold">
                    ${totalPrice}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Shipping Fees</td>
                  <td className="py-2 px-4 border-b"></td>
                  <td className="py-2 px-4 border-b"></td>
                  <td className="py-2 px-4 border-b">${15}</td>
                </tr>
                {showCoupon1 && (
                  <>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        Code #SMILE applied
                      </td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b">
                        {" "}
                        -${(totalPrice * coupon1) / 100}
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="py-2 px-4 border-b">After discount</td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b font-semibold">
                        ${totalPrice - (totalPrice * coupon1) / 100}
                      </td>
                    </tr>
                  </>
                )}
                {showCoupon2 && (
                  <>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        Code #SUCCESS applied
                      </td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b">
                        {" "}
                        -${(totalPrice * coupon2) / 100}
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="py-2 px-4 border-b">After discount</td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b font-semibold">
                        ${totalPrice - (totalPrice * coupon2) / 100}
                      </td>
                    </tr>
                  </>
                )}
                {showCoupon3 && (
                  <>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        Code #HAPPY applied
                      </td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b">
                        -${(totalPrice * coupon3) / 100}
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="py-2 px-4 border-b">After discount</td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b font-extrabold">
                        ${totalPrice - (totalPrice * coupon3) / 100}
                      </td>
                    </tr>
                  </>
                )}
                {/* Coupon Section */}
                <tr>
                  <td className="py-2 px-4 border-b">
                    <Button onPress={onOpen}>Apply Coupon</Button>

                    <Modal
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}
                      backdrop="blur"
                    >
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader>Available coupons</ModalHeader>
                            <ModalBody>
                              <p
                                onClick={() => {
                                  if (showCoupon2) {
                                    setShowCoupon2(false);
                                  } else if (showCoupon3) {
                                    setShowCoupon3(false);
                                  }
                                  setShowCoupon1(true);
                                }}
                                className="cursor-pointer"
                              >
                                {showCoupon1 ? (
                                  <>
                                    <div className=" text-green-400 p-[5px]">
                                      Applied!
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className=" hover:bg-green-300 rounded-md p-[5px]">
                                      Use code #SMILE to get 10% off
                                    </div>
                                  </>
                                )}
                              </p>
                              <p
                                className="cursor-pointer"
                                onClick={() => {
                                  if (showCoupon1) {
                                    setShowCoupon1(false);
                                  } else if (showCoupon3) {
                                    setShowCoupon3(false);
                                  }
                                  if (totalPrice > 1000) setShowCoupon2(true);
                                }}
                              >
                                {showCoupon2 ? (
                                  <>
                                    <div className=" text-green-400 p-[5px]">
                                      Applied!
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    {totalPrice >= 1000 ? (
                                      <>
                                        <div className=" hover:bg-green-300 rounded-md p-[5px]">
                                          Use code #SUCCESS to get 20% off
                                          <div>
                                            (Valid for orders above $1000)
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <div className=" hover:bg-red-300 rounded-md p-[5px]">
                                        Use code #SUCCESS to get 20% off
                                        <div>
                                          (Valid for orders above $1000)
                                        </div>
                                      </div>
                                    )}
                                  </>
                                )}
                              </p>
                              <p
                                className="cursor-pointer"
                                onClick={() => {
                                  if (showCoupon1 && totalPrice > 5000) {
                                    setShowCoupon1(false);
                                  } else if (showCoupon2 && totalPrice > 5000) {
                                    setShowCoupon2(false);
                                  }
                                  if (totalPrice > 3000) {
                                    setShowCoupon3(true);
                                  }
                                }}
                              >
                                {showCoupon3 ? (
                                  <>
                                    <p className=" text-green-400 p-[5px]">
                                      Applied!
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    {totalPrice >= 5000 ? (
                                      <>
                                        <div className=" hover:bg-green-300 rounded-md p-[5px]">
                                          Use code #SUCCESS to get 40% off
                                          <div>
                                            (Valid for orders above $5000)
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <div className=" hover:bg-red-300 rounded-md p-[5px]">
                                        Use code #SUCCESS to get 40% off
                                        <div>
                                          (Valid for orders above $5000)
                                        </div>
                                      </div>
                                    )}
                                  </>
                                )}
                              </p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </td>
                  <td className="py-2 px-4 border-b"></td>
                  <td className="py-2 px-4 border-b"></td>
                  <td className="py-2 px-4 border-b">
                    {showCoupon1 || showCoupon2 || showCoupon3 ? (
                      <Button
                        color="danger"
                        onClick={() => {
                          setShowCoupon1(false);
                          setShowCoupon2(false);
                          setShowCoupon3(false);
                          onClose();
                        }}
                      >
                        Remove
                      </Button>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>{" "}
            <div></div>
          </div>{" "}
        </div>
      ) : (
        <>
          <h1 className=" mb-[30rem] text-center mt-24 text-[2.4rem]">
            Cart is Empty now ☹️
          </h1>
        </>
      )}
    </>
  );
};

export default PurchasedItems;
