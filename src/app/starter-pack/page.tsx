import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { FC } from "react";

const subBannerData = [
  {
    id: 0,
    title: "Free Shipping Over $199",
    src: "/starter/starter-truck.png",
  },
  {
    id: 1,
    title: "375,000+ Customer Reviews",
    src: "/starter/starter-badge.png",
  },
  {
    id: 2,
    title: "6 Million Orders Shipped",
    src: "/starter/starter-thumb.png",
  },
  {
    id: 3,
    title: "A+ BBB Rating",
    src: "/starter/starter-bbb.png",
  },
];

const investCardData = [
  {
    id: 0,
    title: "Invest in Gold",
    subTitle: [
      "Gold American Eagles",
      "Gold Bars",
      "Gold Canadian Coins",
      "Gold American Buffalos",
      "Pre-33 US Gold Coins",
    ],
    investSrc: "/starter/vgold-pack.png",
  },
  {
    id: 1,
    title: "Invest in Silver",
    subTitle: [
      "Silver American Eagles",
      "Silver Bars",
      "Silver Rounds",
      "Canadian Silver Coins",
      "America the Beautiful",
    ],
    investSrc: "/starter/vsilver-pack.png",
  },
  {
    id: 2,
    title: "Invest in Platinum",
    subTitle: [
      "Platinum Eagles",
      "Platinum Bars",
      "Platinum Coins",
      "Gold American Buffalos",
      "Pre-33 US Gold Coins",
    ],
    investSrc: "/starter/vplatinum-pack.png",
  },
];

const StarterPack: FC = () => {
  const getBannerSubDetails = (
    subHeading: string,
    imgStr: string,
    id: number
  ) => (
    <div key={id} className="flex items-center gap-[10px]">
      <Image
        className="w-[30px] h-[30px]"
        src={imgStr}
        alt={subHeading}
        width={30}
        height={30}
      />
      <div>{subHeading}</div>
    </div>
  );

  const getInvestBox = (
    title: string,
    subTitle: string[],
    imgSrc: string,
    id: number
  ) => (
    <div className="flex gap-[5px] justify-around py-[10px] border-[1px] border-[solid] border-[#d3d3d3] md:py-[0px] md:border-none md:justify-normal" key={id}>
      <div>
        <div className="text-[20px] font-bold pb-[17px] w-full m-0">
          {title}
        </div>
        <ul>
          {subTitle.map((item, index) => (
            <li
              className="text-[#145891] font-semibold text-[15px] list-disc list-inside"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <Image
          className="pb-[7px] mt-[6px]"
          src={imgSrc}
          alt={title}
          width={136}
          height={142}
        />
        <button className="w-[100px] h-[28px] text-[#7a4e00] font-bold cursor-pointer rounded-[4px] border-[solid] border-[thin] border-[#9B9B9B] bg-[linear-gradient(#FADB99,_#edbb56)] text-[12px] hover:bg-[linear-gradient(#F7D185,_#EFC468)]">
          View All
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[1200px] md:border-[1px] border-solid border-[#ccc] px-[10px] md:px-[0px]">
      <div className="bg-[url('/starter/starter-banner.png')] w-full pl-[40px] pr-[40px] py-[6px] bg-no-repeat bg-scroll rounded-[4px] md:rounded-none">
        <div className="mx-[auto] my-[0] text-[#fff] text-center [text-shadow:1px_1px_1px_#000000] text-[15px] font-normal md:pt-[34px] md:pb-[47px] md:[font:38px_/_1_TrajanProBold]">
          Buy 10 Ounces of Silver at Spot Price!
        </div>
        <div className="w-full text-[#fff] pb-[20px] text-[18px] font-bold items-center gap-[10px] justify-between hidden md:flex">
          {subBannerData.map((item) =>
            getBannerSubDetails(item.title, item.src, item.id)
          )}
        </div>
      </div>
      <div className="pt-[22px] pr-[12px] pb-[15px] pl-[12px] md:pl-[30px] w-full md:flex">
        <div className="flex flex-col items-center md:w-[750px] md:flex-row">
          <Image
            className="md:w-[250px] md:h-[250px]"
            src="/starter/starterPack.png"
            alt="starterPack"
            width={250}
            height={250}
          />
          <div className="md:pl-[50px] md:pr-[30px] py-[0]">
            <div className="font-semibold text-[21px] md:text-[25px] mb-[20px] text-center md:text-left">
              The JM Bullion Starter Pack
            </div>
            <div className="font-semibold text-[14px] mb-[20px] text-center md:hidden">
              <strong>
                &#40;Limit of 10 Oz at Spot Per Customer/Household&#41;
              </strong>
            </div>
            <div className="text-[15px]">
              <strong className="hidden md:block">
                &#40;Limit of 10 Oz at Spot Per Customer/Household&#41;
              </strong>{" "}
              Start your precious metals portfolio with a 10 oz tube of silver
              rounds, offered at spot price!
            </div>
            <ul>
              <li className="text-[16px] list-disc list-inside mx-[0] my-[8px]">
                New silver rounds from a trusted American mint
              </li>
              <li className="text-[16px] list-disc list-inside mx-[0] my-[8px]">
                Each tube contains ten 1 oz .999 silver rounds
              </li>
              <li className="text-[16px] list-disc list-inside mx-[0] my-[8px]">
                Ships in plastic tube, inside of a custom velvet pouch
              </li>
              <li className="text-[16px] list-disc list-inside mx-[0] my-[8px]">
                All orders include tracking and insurance
              </li>
              <li className="text-[16px] list-disc list-inside mx-[0] my-[8px]">
                Ships within 1 business day of cleared payment
              </li>
              <li className="text-[16px] list-disc list-inside mx-[0] my-[8px]">
                10 oz at spot offer limited to one per household.
              </li>
            </ul>
            <div className="items-center hidden md:flex">
              <div className="flex items-center">
                <Image
                  //remove this class
                  className="filter brightness-0 saturate-[100%]"
                  src="/starter/starter-badge.png"
                  alt="starter-badge"
                  width={20}
                  height={20}
                />
                <div className="m-0 pt-[2px] pr-[0] pb-[0] pl-[5px] text-[#114a81] inline-block font-bold text-[14px]">
                  In Stock
                </div>
              </div>
              <div className="flex items-center ml-[10px] gap-[5px]">
                <Image
                  className=""
                  src="/starter/5-big-star.jpg"
                  alt="5star"
                  width={120}
                  height={20}
                />
                <div className="text-[#125ea7]">&#40;128&#41;</div>
              </div>
              <button className="text-[12px] w-[130px] ml-[20px] bg-[#114e88] rounded-[5px] min-h-[35px] text-center border-[medium] border-[none] text-[white] font-bold hover:bg-[#12375c]">
                Login to Review
              </button>
            </div>
          </div>
        </div>
        <table
          cellSpacing={0}
          className="border-[thin] border-[solid] border-[#ccc] mt-[10px] w-full md:hidden"
        >
          <thead className="bg-[#204166] text-[#fff]">
            <tr>
              <th className="px-[10px] py-[5px] text-[14px] font-normal [border-right:1px_solid_#ccc]">
                Qty
              </th>
              <th className="px-[10px] py-[5px] text-[14px] font-normal [border-right:1px_solid_#ccc]">
                (e)Check/Wire
              </th>
              <th className="px-[10px] py-[5px] text-[14px] font-normal [border-right:1px_solid_#ccc]">
                Crypto
              </th>
              <th className="px-[10px] py-[5px] text-[14px] font-normal">
                Card/PayPal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[16px] font-normal text-center [border-right:1px_solid_#ccc]">
                <span>1+</span>
              </td>
              <td className="text-[16px] font-normal text-center [border-right:1px_solid_#ccc]">
                <span>$310.90</span>
              </td>
              <td className="text-[16px] font-normal text-center [border-right:1px_solid_#ccc]">
                <span>$314.14</span>
              </td>
              <td className="text-[16px] font-normal text-center">
                <span>$323.85</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="md:w-[390px] bg-[#f4f4f4] border-[1px] border-[solid] border-[#ccc] md:pl-[14px] md:pr-[14px] h-[fit-content] pt-[10px] pb-[20px]">
          <div className="w-full hidden md:flex justify-around items-center">
            <div className="flex gap-[5px]">
              <Image
                className=""
                src="/starter/paper-check.png"
                alt="paper-check"
                width={38}
                height={26}
              />
              <Image
                className=""
                src="/starter/wire.png"
                alt="wire"
                width={38}
                height={26}
              />
            </div>
            <div className="flex">
              <Image
                className=""
                src="/starter/bitcoin.png"
                alt="bitcoin"
                width={38}
                height={26}
              />
            </div>
            <div className="flex gap-[5px]">
              <Image
                className=""
                src="/starter/gray-card.png"
                alt="gray-card"
                width={38}
                height={26}
              />
              <Image
                className=""
                src="/starter/vpaypal.png"
                alt="vpaypal"
                width={38}
                height={26}
              />
            </div>
          </div>
          <table
            cellSpacing={0}
            className="border-[thin] border-[solid] border-[#ccc] mt-[10px] w-full hidden md:table"
          >
            <thead className="bg-[#14253b] text-[#fff]">
              <tr>
                <th className="px-[10px] py-[5px] text-[14px] font-normal [border-right:1px_solid_#ccc]">
                  ACH/Check/Wire
                </th>
                <th className="px-[10px] py-[5px] text-[14px] font-normal [border-right:1px_solid_#ccc]">
                  Crypto
                </th>
                <th className="px-[10px] py-[5px] text-[14px] font-normal">
                  Card/PayPal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[16px] font-normal text-center [border-right:1px_solid_#ccc]">
                  <span>$310.90</span>
                </td>
                <td className="text-[16px] font-normal text-center [border-right:1px_solid_#ccc]">
                  <span>$314.14</span>
                </td>
                <td className="text-[16px] font-normal text-center">
                  <span>$323.85</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center [border-bottom:1px_solid_#ccc] md:[border-bottom:none] px-[20px] py-[0] pb-[15px] md:px-[26px] md:py-[20px]">
            <button className="h-[44px] w-full md:w-[260px] text-center rounded-[4px] font-bold text-[16px] bg-[linear-gradient(#FADB99,_#edbb56)] text-[#7a4e00] border-[solid] border-[thin] border-[#9B9B9B] hover:bg-[linear-gradient(#F7D185,_#EFC468)]">
              Add to Cart
            </button>
          </div>
          <ul className="my-[26px] ml-28 md:my[0px] md:ml-[50px]">
            <li className="text-[16px] list-disc list-inside">
              Limited Time Offer
            </li>
            <li className="text-[16px] list-disc list-inside">
              1 Max per Person/Household
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-[30px] [border-top:1px_solid_#ccc]">
        <div className="flex flex-col gap-[5px] justify-around md:flex-row md:gap-[20px]">
          {investCardData.map((item) =>
            getInvestBox(item.title, item.subTitle, item.investSrc, item.id)
          )}
        </div>
      </div>
      <div className="p-[30px] hidden md:block">
        <div className="text-[16px] font-semibold leading-[25px] uppercase mb-[30px]">
          Details: Please note that this promotion is limited to 10 ounces of
          silver at spot price, regardless of product. The actual product
          offered may change over time, but customers can only redeem the
          promotion once for a maximum of 10 ounces of silver total. Also note
          that we limit this promotion to one purchase per account, per
          household/shipping address, and per billing method (i.e. you cannot
          use the same credit card to ship an additional starter pack to a
          separate shipping address). All Starter Pack purchases are manually
          reviewed for violation of these terms.
        </div>
        <div className="text-[16px] font-normal mb-[20px]">
          If you’ve yet to invest in silver or are looking for a great silver
          product to start your portfolio with, JM Bullion is here to help. In
          this special product listing, JM Bullion offers ten 1 oz silver rounds
          as part of a starter pack. Each of the silver rounds in this product
          listing ships to you in a special 10-round tube, encased in a velvet
          pouch.
        </div>
        <div className="text-[16px] font-semibold leading-[25px] mb-[20px]">
          Product Highlights:
        </div>
        <ul>
          <li className="text-[16px] list-disc list-inside mx-[0] my-[10px] uppercase font-semibold">
            Special product listing with JM Bullion!
          </li>
          <li className="text-[16px] list-disc list-inside mx-[0] my-[10px] uppercase font-semibold">
            Ships to you in a 10-round tube, inside a velvet pouch.
          </li>
          <li className="text-[16px] list-disc list-inside mx-[0] my-[10px]">
            Contains 10 Troy oz of .999 pure silver.
          </li>
          <li className="text-[16px] list-disc list-inside mx-[0] my-[10px]">
            Deal limited to one per household forever. Even if the product
            changes, only one purchase at spot allowed.
          </li>
        </ul>
        <div className="mb-[20px]">
          There are two silver product weights that have proven more popular
          with investors than any other: 1 oz and 10 oz These particular weights
          are popular for two primary reasons, affordability and ease of
          transport. The lighter weights make it easier for more investors to
          enter the market with the purchase of these silver rounds, and their
          smaller size makes transport and storage simpler as well.
        </div>
        <div className="mb-[20px]">
          JM Bullion has a special offer for customers in this product listing.
          Not only will you receive 10 1 oz JM Bullion Eagle Silver Rounds with
          your purchase today, but they will also ship to you in a velvet pouch
          with the JM Bullion brand logo featured on its surface. Supplies are
          limited, so don’t hesitate to act.
        </div>
        <div className="mb-[20px]">
          These JM Bullion silver rounds feature an American bald eagle on the
          obverse side that is accompanied by a small version of the JM Bullion
          logo. On the reverse side, the round prominently features our JM
          Bullion brand logo with the identifying hallmarks found along the edge
          of the design field on both sides of the silver rounds.
        </div>
        <div>
          If you have any questions about the limited-edition JM Bullion starter
          pack, please feel free to contact us. You can reach us on the phone at
          800-276-6508, online using our live chat, and via our email address.
        </div>
      </div>
    </div>
  );
};

export default StarterPack;
