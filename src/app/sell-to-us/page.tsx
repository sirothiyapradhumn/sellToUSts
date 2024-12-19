import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type CardType = "blue" | "white";

const SellToUs: FC = () => {
  const getFaq = (subHeading: string, link: string) => (
    <div className="list-disc list-item pb-[5px] md:flex">
      <i className="si-file-text2"></i>
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
        <div className="bg-[#11355B] text-[#FFFFFF] border-[solid] border-[thin] border-[#C7C7C7] h-[170px] p-[10px] flex flex-col justify-center items-center w-[46%] md:p-[45px] md:w-[calc((100%-40px)/3)] md:h-[300px]">
          <Image
            className="mb-[15px] w-[70px] md:w-[100px]"
            src={cardSrc}
            alt={cardAlt}
            width={100}
            height={100}
          />
          <div className="font-bold text-[18.75px] text-center md:mb-[20px]">
            {cardTitle}
          </div>
          <div className="text-[15px] text-center hidden lg:block">
            {cardSubTitle}
          </div>
        </div>
      );
    }
    return (
      <div className="border-[solid] border-[thin] border-[#C7C7C7] h-[170px] p-[10px] flex flex-col justify-center items-center w-[46%] md:p-[45px] md:w-[calc((100%-40px)/3)] md:h-[300px]">
        <Image
          className="mb-[20px] w-[70px] md:w-[100px]"
          src={cardSrc}
          alt={cardAlt}
          width={100}
          height={100}
        />
        <div className="font-bold text-[18.75px] text-center md:mb-[20px]">
          {cardTitle}
        </div>
        <div className="text-[15px] text-center hidden lg:block">
          {cardSubTitle}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[1200px] mx-[25px] md:mx-[0]">
      <div className="pt-[35px] px-0  text-center font-bold text-[18px] md:text-[33px] md:pb-[25px] lg:text-[33px] lg:pb-[25px] xl:text-[33px] xl:pb-[25px]">
        Sell Your Gold and Silver Bullion
      </div>

      <div className="flex md:mb-[30px] w-full border-[solid] border-[#ccc] pt-[15px]  mb:pt-[30px] mb:pl-[30px] pb-[20px] mb:pr-[30px] flex-col md:flex-row md:border-[1px] lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex-[1_1_100%] hidden flex-col items-center md:flex ">
          <Image
            className="hidden md:block"
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
          <div className="md:pb-[30px]">
            JM Bullion is proud to offer the only do-it-yourself Sell-To-Us tool
            in the industry. That&apos;s right, you can lock in your price
            online 24/7 without ever speaking to our Sell-To-Us specialists.
          </div>
          <div className="pb-[30px] hidden md:block">
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
          <div className="pt-[10px] w-full flex justify-center">
            <Link
              href="/my-account/buyback-products/"
              className="w-full flex justify-center"
            >
              <button className="text-[#7a4e00] font-bold cursor-pointer rounded-[4px] text-[18px] border-[solid] border-[thin] border-[#9B9B9B] bg-[linear-gradient(#FADB99,_#edbb56)] w-full h-[50px] md:w-[400px] md:h-[60px] lg:w-[400px] lg:h-[60px] xl:w-[400px] xl:h-[60px] 2xl:w-[400px] 2xl:h-[60px] hover:bg-[linear-gradient(#F7D185,_#EFC468)]">
                Sell to Us Online
              </button>
            </Link>
          </div>

          <div className="pt-[10px] font-semibold text-[18px] hidden md:block">
            Prefer to sell over the phone? No problem
          </div>
          <div className="text-[12px] w-full pt-1 md:hidden">
            * Please note our minimum purchase amount is $1,000.
          </div>
          <div className="gap-[30px] mx-[0] my-[0.6rem] md:flex ">
            <div className="flex items-center gap-[15px] justify-center">
              <Image
                className=""
                src="/sellToUs/phone-ring-icon.png"
                alt="phone-ring-icon"
                width={22}
                height={22}
              />
              <Link
                href="tel:+18442582538"
                className="md:underline text-[#114e88] font-semibold text-[18px]"
              >
                844-258-2538
              </Link>
            </div>
            <div className="sm:border-r border-gray-300" />
            <div className="flex items-center gap-[15px] justify-center pt-[5px] md:pt-[0]">
              <Image
                className=""
                src="/sellToUs/msg-icon.png"
                alt="msg-icon"
                width={22}
                height={22}
              />
              <Link
                href="mailto:selltous@jmbullion.com"
                className="md:underline text-[#114e88] font-semibold text-[18px]"
              >
                SellToUs@jmbullion.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-[30px] w-full border-[1px] border-gray-300 px-[8px] py-[20px] md:p-[30px] bg-[#f8f8f8] md:bg-white">
        <div className="font-bold text-[19px] pb-[15px] md:text-[25px] w-full text-center mb:pb-[29px]">
          How it Works:
        </div>
        <div className="md:flex md:ml-[30px] relative z-10">
          <div className="flex flex-col items-center gap-[15px]">
            <div className="bg-[#f2c568] h-[48px] w-[48px] rounded-[50%] text-[#fff] text-[20px] flex justify-center items-center font-medium">
              1
            </div>
            <div className="text-center text-[18px] font-bold md:text-[17px] md:font-semibold">
              <span className="hidden md:inline">Get a Quote or </span>Lock in a
              Price
            </div>
            <ul className="md:pr-[40px] md:pl-[40px]">
              <li className="text-center md:hidden">
                Use the Sell to Us Online button above to select the products
                you want to sell. If you do not see your products listed, feel
                free to email or call us. Once you are ready, checkout to lock
                in your price.
              </li>
              <li className="list-disc mb-[10px] hidden md:list-item">
                Use the Sell to Us Online button above to select the products
                you want to sell.
              </li>
              <li className="list-disc mb-[10px] hidden md:list-item">
                If you do not see your products listed, feel free to email or
                call us.
              </li>
              <li className="list-disc mb-[10px] hidden md:list-item">
                Once you are ready, checkout to lock in your price.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-[15px] pt-[20px] md:pt-[0]">
            <div className="bg-[#f2c568] h-[48px] w-[48px] rounded-[50%] text-[#fff] text-[20px] flex justify-center items-center font-medium">
              2
            </div>
            <div className="absolute bg-[#f2c568] h-[5px] -z-10 top-[22px] w-[66%] hidden md:block" />
            <div className="text-center text-[18px] font-bold md:text-[17px] md:font-semibold">
              Ship Your Products <span className="hidden md:inline">to Us</span>
            </div>
            <ul className="md:pr-[40px] md:pl-[40px]">
              <li className="text-center md:hidden">
                Once you have locked in your sale, you will receive an email
                with mailing instructions. Please follow the instructions
                exactly to ensure safe arrival of your products.
              </li>
              <li className="list-disc mb-[10px] hidden md:list-item">
                Once you have locked in your sale, you will receive an email
                with mailing instructions.
              </li>
              <li className="list-disc mb-[10px] hidden md:list-item">
                Please follow the instructions exactly to ensure safe arrival of
                your products.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-[15px] pt-[20px] md:pt-[0]">
            <div className="bg-[#f2c568] h-[48px] w-[48px] rounded-[50%] text-[#fff] text-[20px] flex justify-center items-center font-medium">
              3
            </div>
            <div className="text-center text-[18px] font-bold md:text-[17px] md:font-semibold">
              Receive Payment<span className="md:hidden inline">!</span>
            </div>
            <ul className="md:pr-[40px] md:pl-[40px]">
              <li className="text-center md:hidden">
                Once we receive your package, our inventory team will inspect
                each item and approve the sale. After approval, your payment
                will be issued.
              </li>
              <li className="list-disc mb-[10px] hidden md:list-item">
                Once we receive your package, our inventory team will inspect
                each item and approve the sale.
              </li>
              <li className="list-disc mb-[10px] hidden md:list-item">
                After approval, your payment will be issued.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[275px] md:h-[343px] my-[10px] relative bg-cover bg-[url('/sellToUs/gold-silver-jewelry.png')] md:my-[30px]">
        <div className="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_.7)_12.8%,_rgba(0,_0,_0,_.4)_48.81%,_rgba(0,_0,_0,_.6)_84.82%)] w-full h-full z-10 absolute"></div>
        <div className="w-full text-[#fff] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 gap-[10px] flex flex-col items-center z-20">
          <div className="m-0 font-[TrajanProBold] font-semibold text-center text-[22px] md:text-[36px]">
            We Buy Jewelry, Scrap, and Silverware!
          </div>
          <div className="italic font-normal text-center text-[18px] md:text-[30px]">
            Free Insured Shipping & Returns
          </div>
          <Link href="/scrap-jewelry-silverware">
            <button className="ml-[auto] mr-[auto] my-[10px] px-[20px] py-[10px] text-[20px] text-[#7a4e00] font-bold cursor-pointer rounded-[4px] border-[solid] border-[thin] border-[#9B9B9B] bg-[linear-gradient(#FADB99,_#edbb56)] hover:bg-[linear-gradient(#F7D185,_#EFC468)] md:w-full md:h-[50px]">
              Click Here to Learn More
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className="text-lg font-bold text-center pb-[15px] md:text-[25px] md:pb-[30px]">
          Why Sell to JM Bullion?
        </div>
        <div>
          <div className="gap-[10px] flex flex-wrap justify-center md:hidden">
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
              "/sellToUs/vbb-shipping.png",
              "vbb-shipping",
              "Easy Shipping",
              "We provide shipping labels, and you can drop off your package at a facility or schedule a pickup. You can also choose to ship products on your own.",
              "white"
            )}
            {getCard(
              "/sellToUs/vbb-rates.png",
              "vbb-rates",
              "Industry Leading Rates",
              "We continually update our prices based on current marketconditions.",
              "blue"
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
          <div className="gap-[20px] flex-wrap justify-center hidden md:flex ">
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
        <div className="font-bold text-[19px] md:text-[25px] pt-[18px] pb-[10px] py-[10px] md:pt-[30px] md:pb-[20px] text-center">
          Sell-To-Us FAQ
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex gap-[10px] flex-col pl-[30px] md:w-4/5 md:pl-[0] md:flex-row">
            <div className="flex-[1_1_50%] flex flex-col md:gap-[10px]">
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
            <div className="flex-[1_1_50%] flex flex-col md:gap-[10px]">
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
          <Link
            className="w-[240px]  border-[solid] border-[#ccc] cursor-pointer md:border-[1px]"
            href="/faq"
          >
            <div className="text-[#1f4167] flex text-[18px] font-bold justify-center no-underline md:hidden">
              More Questions?
            </div>
            <Image
              className="w-[240px] cursor-pointer hidden md:block"
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
