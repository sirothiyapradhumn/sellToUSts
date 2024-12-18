import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type CardType = "blue" | "white";

const SellToUs: FC = () => {
  const getFaq = (subHeading: string, link: string) => (
    <div className="flex gap-1">
      <Image
        className="h-[15px] w-[15px] mt-[6px]"
        src="/sellToUs/phone-ring-icon.png"
        alt="phone-ring-icon"
        width={20}
        height={5}
      />
      <Link className="underline text-[16px] text-[#444444]" href={link}>
        {subHeading}
      </Link>
    </div>
  );

  const getCard = (
    cardSrc: string,
    cardAlt: string,
    cardTitle: string,
    cardSubTitle: string,
    cardType: CardType
  ) => {
    if (cardType === "blue") {
      return (
        <div className="bg-[#11355B] text-[#FFFFFF] border-[solid] border-[thin] border-[#C7C7C7] h-[300px] p-[45px] mb-[20px] flex flex-col justify-center items-center lg:w-[calc((100%-40px)/3)]">
          <Image
            className="mb-[20px]"
            src={cardSrc}
            alt={cardAlt}
            width={100}
            height={100}
          />
          <div className="mb-[20px] font-semibold text-[17px]">{cardTitle}</div>
          <div className="text-[15px] text-center">{cardSubTitle}</div>
        </div>
      );
    }
    return (
      <div className="border-[solid] border-[thin] border-[#C7C7C7] h-[300px] p-[45px] mb-[20px] flex flex-col justify-center items-center lg:w-[calc((100%-40px)/3)]">
        <Image
          className="mb-[20px]"
          src={cardSrc}
          alt={cardAlt}
          width={100}
          height={100}
        />
        <div className="mb-[20px] font-semibold text-[17px]">{cardTitle}</div>
        <div className="text-[15px] text-center">{cardSubTitle}</div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[1200px]">
      <div className="pt-[35px] px-0 pb-[25px] text-center font-bold text-[33px]">
        Sell Your Gold and Silver Bullion
      </div>

      <div className="flex mb-[30px] w-full border-[1px] border-[solid] border-[#ccc] pt-[30px] pl-[30px] pb-[20px] pr-[30px] flex-col sm:flex-row">
        <div className="flex-[1_1_100%] flex flex-col items-center">
          <Image
            className=""
            src="/sellToUs/vsell-to-us.jpg"
            alt="SelltousIcon"
            width={260}
            height={0}
          />
          <div className="font-semibold text-[13px] mt-[10px] mb-[10px]">
            * Please note our minimum purchase amount is $1,000.
          </div>
        </div>
        <div className="text-[16px] flex flex-col items-center">
          <div className="pb-[30px]">
            JM Bullion is proud to offer the only do-it-yourself Sell-To-Us tool
            in the industry. That&apos;s right, you can lock in your price
            online 24/7 without ever speaking to our Sell-To-Us specialists.
          </div>
          <div className="pb-[30px]">
            The process is simple. First,{" "}
            <Link className="underline text-[#125ea7]" href="#">
              login
            </Link>{" "}
            to your JM Bullion account or{" "}
            <Link className="underline text-[#125ea7]" href="#">
              click here
            </Link>{" "}
            to create one. Then, click the button below and you will be sent to
            a new page where you can select the product(s) you&apos;d like to
            sell, input your quantity, and fill out your information to complete
            the sale order.
          </div>
          <div className="pt-[10px]">
            <Link href=" https://www.jmbullion.com/my-account/buyback-products/">
              <button className="h-[60px] text-[#7a4e00] font-bold cursor-pointer rounded-[4px] border-[solid] border-[thin] border-[#9B9B9B] bg-[linear-gradient(#FADB99,_#edbb56)] w-72 sm:w-[400px] hover:bg-[linear-gradient(#F7D185,_#EFC468)]">
                Sell to Us Online
              </button>
            </Link>
          </div>

          <div className="pt-[10px] font-semibold text-[18px]">
            Prefer to sell over the phone? No problem
          </div>
          <div className="sm:flex gap-[30px] mx-[0] my-[0.6rem]">
            <div className="flex items-center gap-[15px]">
              <Image
                className=""
                src="/sellToUs/phone-ring-icon.png"
                alt="phone-ring-icon"
                width={22}
                height={22}
              />
              <Link
                href="tel:+18442582538"
                className="underline text-[#114e88] font-semibold text-[18px]"
              >
                844-258-2538
              </Link>
            </div>
            <div className="sm:border-r border-gray-300" />
            <div className="flex items-center gap-[15px]">
              <Image
                className=""
                src="/sellToUs/msg-icon.png"
                alt="msg-icon"
                width={22}
                height={22}
              />
              <Link
                href="mailto:selltous@jmbullion.com"
                className="underline text-[#114e88] font-semibold text-[18px]"
              >
                SellToUs@jmbullion.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-[30px] w-full border-[1px] border-gray-300 p-[30px]">
        <div className="font-bold text-[25px] w-full text-center pb-[29px]">
          How it Works:
        </div>
        <div className="flex items-center w-[72%]">
          <div className="relative flex flex-col items-center">
            <div className="bg-[#f2c568] h-[48px] w-[48px] rounded-[50%] text-[#fff] text-[20px] flex justify-center items-center font-medium">
              1
            </div>
            <div className="absolute top-1/2 w-full -z-10 h-1 bg-yellow-400 left-5"></div>
          </div>

          <div className="relative flex flex-col items-center w-full">
            <div className="bg-[#f2c568] h-[48px] w-[48px] rounded-[50%] text-[#fff] text-[20px] flex justify-center items-center font-medium">
              2
            </div>
            <div className="absolute bg-[#f2c568] w-full h-[5px] top-2/4 -z-10"></div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="bg-[#f2c568] h-[48px] w-[48px] rounded-[50%] text-[#fff] text-[20px] flex justify-center items-center font-medium">
              3
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] pt-[20px] justify-around">
          <div className="flex flex-col w-[28%]">
            <div className="pb-[10px] text-center text-[17px] font-semibold">
              Get a Quote or Lock in a Price
            </div>
            <div>
              <ul>
                <li className="list-disc mb-[10px]">
                  Use the Sell to Us Online button above to select the products
                  you want to sell.
                </li>
                <li className="list-disc mb-[10px]">
                  If you do not see your products listed, feel free to email or
                  call us.
                </li>
                <li className="list-disc mb-[10px]">
                  Once you are ready, checkout to lock in your price.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[28%]">
            <div className="pb-[10px] text-center text-[17px] font-semibold">
              Ship Your Products to Us
            </div>
            <div>
              <ul>
                <li className="list-disc mb-[10px]">
                  Once you have locked in your sale, you will receive an email
                  with mailing instructions.
                </li>
                <li className="list-disc mb-[10px]">
                  Please follow the instructions exactly to ensure safe arrival
                  of your products.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[28%]">
            <div className="pb-[10px] text-center text-[17px] font-semibold">
              Receive Payment
            </div>
            <div>
              <ul>
                <li className="list-disc mb-[10px]">
                  Once we receive your package, our inventory team will inspect
                  each item and approve the sale.
                </li>
                <li className="list-disc mb-[10px]">
                  After approval, your payment will be issued.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[343px] ml-[0] mr-[0] my-[30px] relative bg-[url('/sellToUs/gold-silver-jewelry.png')]">
        <div className="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_.7)_12.8%,_rgba(0,_0,_0,_.4)_48.81%,_rgba(0,_0,_0,_.6)_84.82%)] w-full h-full z-10 absolute"></div>
        <div className="w-full text-[#fff] absolute top-1/4 gap-[10px] flex flex-col items-center z-20">
          <div className="m-0 font-[TrajanProBold] font-semibold md:text-[36px] sm: text-[20px]">
            We Buy Jewelry, Scrap, and Silverware!
          </div>
          <div className="italic font-normal md:text-[30px] sm:text-[15px]">
            Free Insured Shipping & Returns
          </div>
          <Link href="https://www.jmbullion.com/scrap-jewelry-silverware/">
            <button className="ml-[auto] mr-[auto] my-[20px] px-[20px] py-[10px] text-[20px] text-[#7a4e00] font-bold cursor-pointer rounded-[4px] border-[solid] border-[thin] border-[#9B9B9B] bg-[linear-gradient(#FADB99,_#edbb56)] hover:bg-[linear-gradient(#F7D185,_#EFC468)]">
              Click Here to Learn More
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className="text-[25px] font-bold text-center pb-[30px]">
          Why Sell to JM Bullion
        </div>
        <div>
          <div className="lg:flex gap-[20px]">
            {getCard(
              "/sellToUs/vbb-leader.png",
              "vbb-leader",
              "Trusted Leader",
              "We purchase tens of millions in product from our customers each month.",
              "blue"
            )}
            {getCard(
              "/sellToUs/vbb-pricing.png",
              "vbb-pricing",
              "Transparent Pricing",
              "Our Sell-To-Us prices are clearly published on the website for a majority of our most popular products.",
              "white"
            )}
            {getCard(
              "/sellToUs/vbb-rates.png",
              "vbb-rates",
              "Industry Leading Rates",
              "We continually update our prices based on current marketconditions.",
              "blue"
            )}
          </div>
          <div className="lg:flex gap-[20px]">
            {getCard(
              "/sellToUs/vbb-shipping.png",
              "vbb-shipping",
              "Easy Shipping",
              "We provide shipping labels, and you can drop off your package at a facility or schedule a pickup. You can also choose to ship products on your own.",
              "white"
            )}
            {getCard(
              "/sellToUs/vbb-self.png",
              "vbb-self",
              "Do-It-Yourself",
              "No need to speak with anyone. Sell instantly online 24/7.",
              "blue"
            )}
            {getCard(
              "/sellToUs/vbb-payment.png",
              "vbb-payment",
              "Quick Payment",
              "Receive payment in 1-3 business days after products are authenticated.",
              "white"
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="font-bold text-[25px] px-[0] py-[30px] text-center">
          Sell-To-Us FAQ
        </div>
        <div className="flex flex-col items-center sm:flex-row">
          <div className="flex gap-[10px] flex-col  sm:flex-row sm:w-4/5">
            <div className="flex-[1_1_50%] flex flex-col gap-[10px]">
              {getFaq(
                "What if I decide not to send in my items after locking in a price? Are there penalties or fees for that?",
                "https://www.jmbullion.com/faq/decide-send-items-locking-price-penalties-fees-that/"
              )}
              {getFaq(
                "If I sell to you, is it reported to the government?",
                "https://www.jmbullion.com/faq/sell-you-reported-government/"
              )}
              {getFaq(
                "Can I sell from my IRA?",
                "https://www.jmbullion.com/faq/sell-ira/"
              )}
              {getFaq(
                "Do you have a minimum Sell-To-Us amount?",
                "https://www.jmbullion.com/faq/minimum-sell-to-us-amount/"
              )}
              {getFaq(
                "How much is my coin/bar worth?",
                "https://www.jmbullion.com/faq/coin-bar-worth/"
              )}
            </div>
            <div className="flex-[1_1_50%] flex flex-col gap-[10px]">
              {getFaq(
                "Do you buy all types of coins and bullion?",
                "https://www.jmbullion.com/faq/buy-types-coins-bullion/"
              )}
              {getFaq(
                "How quickly are items verified once they&apos;re received?",
                "https://www.jmbullion.com/faq/quickly-items-verified-theyre-received/"
              )}
              {getFaq(
                "How quickly do you pay?",
                "https://www.jmbullion.com/faq/quickly-pay/"
              )}
              {getFaq(
                "How will you pay out my Sell-To-Us order?",
                "https://www.jmbullion.com/faq/pay-sell-to-us-order/"
              )}
              {getFaq(
                "How do I ship my Sell-To-Us order to you?",
                "https://www.jmbullion.com/faq/how-to-ship-sell-to-us/"
              )}
            </div>
          </div>
          <Link href="https://www.jmbullion.com/faq/">
            <Image
              className="w-[240px] border-[solid] border-[1px] border-[#ccc] mt-[10px] mb-[40px] cursor-pointer"
              src="/sellToUs/vsell-to-us-q.png"
              alt="vsell-to-us-q"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellToUs;
