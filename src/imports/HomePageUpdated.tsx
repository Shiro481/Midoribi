import svgPaths from "./svg-roz7sjngno";
import imgCloseUpOfAPerfectMatchaLatteWithLatteArt from "figma:asset/1a7eff3bcf134f429b5c993a7be07ecbfe1b1571.png";
import imgMatchaOperaCakeWithGoldLeaf from "figma:asset/5b1286096e6ddcadb0d76d42e2cacd50e3a38a3d.png";
import imgHandcraftedMatchaMochi from "figma:asset/5bc4933bcdb04019b70be88ae73f559904d5f534.png";
import imgMatchaWhiskingExperience from "figma:asset/bfa0b4bf87ca44593f20fc3d90ce3d0491c6ea70.png";
import imgMapOfTokyo from "figma:asset/942c4a402ae5e75ec775fa887e8c64e02015f27c.png";

function CloseUpOfAPerfectMatchaLatteWithLatteArt() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Close up of a perfect matcha latte with latte art">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-64.26%] max-w-none top-0 w-[228.52%]" src={imgCloseUpOfAPerfectMatchaLatteWithLatteArt} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Container">
      <CloseUpOfAPerfectMatchaLatteWithLatteArt />
      <div className="absolute bg-gradient-to-r from-[#0a0a0a] inset-0 to-[rgba(10,10,10,0)] via-1/2 via-[rgba(10,10,10,0.6)]" data-name="Gradient" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[14px] tracking-[4.2px] uppercase w-full">
        <p className="leading-[20px]">Uji Origin • Ceremonial Grade</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[0.5px] items-start leading-[0] relative shrink-0 text-[96px] w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[96px] justify-center relative shrink-0 text-[#f1f5f9] w-[454.33px]">
        <p className="leading-[96px]">The Art of</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Regular_Italic',sans-serif] h-[96px] justify-center not-italic relative shrink-0 text-[#13ec13] w-[484.91px]">
        <p className="leading-[96px]">Modern Tea</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] pt-[8px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[84px] justify-center leading-[28px] relative shrink-0 text-[#94a3b8] text-[20px] w-[503.38px]">
        <p className="mb-0">Experience the purest ceremonial grade matcha, stone-</p>
        <p className="mb-0">ground and whisked to perfection for a moment of</p>
        <p>absolute serenity.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#13ec13] content-stretch flex flex-col items-center justify-center px-[32px] py-[17px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] text-center tracking-[1.6px] uppercase w-[138.64px]">
        <p className="leading-[24px]">Explore Menu</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[33px] py-[17px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] text-center tracking-[1.6px] uppercase w-[104.02px]">
        <p className="leading-[24px]">Our Story</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <Container3 />
      <Heading />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[24px] relative w-full">
        <Container2 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex h-[2925px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Section">
      <Container />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[50px] leading-[0] relative shrink-0 text-[48px] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[48px] justify-center left-0 text-[#f1f5f9] top-[25.5px] w-[240.25px]">
        <p className="leading-[48px]">{`Signature `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Regular_Italic',sans-serif] h-[48px] justify-center left-[240.25px] not-italic text-[#13ec13] top-[24px] w-[164.89px]">
        <p className="leading-[48px]">Delights</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[48px] justify-center leading-[24px] relative shrink-0 text-[#94a3b8] text-[16px] w-[408.08px]">
        <p className="mb-0">Our pastry chefs blend traditional Japanese flavors with</p>
        <p>contemporary French techniques.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[408.08px]" data-name="Container">
      <Heading1 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[5px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[14px] tracking-[1.4px] uppercase w-[131.89px]">
        <p className="leading-[20px]">View Full Menu</p>
      </div>
      <Container10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Link />
    </div>
  );
}

function MatchaOperaCakeWithGoldLeaf() {
  return (
    <div className="h-[486.66px] relative shrink-0 w-full" data-name="Matcha Opera Cake with gold leaf">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-12.5%] max-w-none top-0 w-[125%]" src={imgMatchaOperaCakeWithGoldLeaf} />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] bottom-[16px] content-stretch flex flex-col items-start px-[17px] py-[9px] right-[16.01px] rounded-[9999px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(19,236,19,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[26.59px]">
        <p className="leading-[24px]">$12</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute aspect-[4/5] bg-[#0f172a] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 rounded-[12px] top-0" data-name="Background">
      <MatchaOperaCakeWithGoldLeaf />
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[510.66px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] w-[187.77px]">
        <p className="leading-[28px]">Matcha Opera Cake</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.625px] right-0 top-[545.53px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] relative shrink-0 text-[#64748b] text-[14px] w-[328.91px]">
        <p className="mb-0">Layered almond sponge, matcha ganache, and dark</p>
        <p>chocolate glaze topped with 24k gold leaf.</p>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="relative self-stretch shrink-0 w-[389.33px]" data-name="Product 1">
      <Background />
      <Heading2 />
      <Container12 />
    </div>
  );
}

function HandcraftedMatchaMochi() {
  return (
    <div className="h-[486.66px] relative shrink-0 w-full" data-name="Handcrafted Matcha Mochi">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-12.5%] max-w-none top-0 w-[125%]" src={imgHandcraftedMatchaMochi} />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] bottom-[16px] content-stretch flex flex-col items-start px-[17px] py-[9px] right-[16px] rounded-[9999px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(19,236,19,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[19.86px]">
        <p className="leading-[24px]">$8</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute aspect-[4/5] bg-[#0f172a] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 rounded-[12px] top-0" data-name="Background">
      <HandcraftedMatchaMochi />
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[510.66px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] w-[162.91px]">
        <p className="leading-[28px]">Ceremony Mochi</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.625px] right-0 top-[545.53px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] relative shrink-0 text-[#64748b] text-[14px] w-[340.25px]">
        <p className="mb-0">Soft glutinous rice cake filled with house-made white</p>
        <p>chocolate and Uji matcha cream.</p>
      </div>
    </div>
  );
}

function Product1() {
  return (
    <div className="relative self-stretch shrink-0 w-[389.33px]" data-name="Product 2">
      <Background1 />
      <Heading3 />
      <Container13 />
    </div>
  );
}

function MatchaWhiskingExperience() {
  return (
    <div className="h-[486.67px] relative shrink-0 w-full" data-name="Matcha Whisking Experience">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-12.5%] max-w-none top-0 w-[125%]" src={imgMatchaWhiskingExperience} />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] bottom-[16px] content-stretch flex flex-col items-start px-[17px] py-[9px] right-[16px] rounded-[9999px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(19,236,19,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[26.44px]">
        <p className="leading-[24px]">$15</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute aspect-[4/5] bg-[#0f172a] content-stretch flex flex-col items-start justify-center left-0 overflow-clip right-0 rounded-[12px] top-0" data-name="Background">
      <MatchaWhiskingExperience />
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[510.67px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] w-[205.67px]">
        <p className="leading-[28px]">Traditional Whisk Set</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.625px] right-0 top-[545.54px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] relative shrink-0 text-[#64748b] text-[14px] w-[385.18px]">
        <p className="mb-0">Our finest ceremonial grade matcha prepared tableside with</p>
        <p>traditional bamboo whisk.</p>
      </div>
    </div>
  );
}

function Product2() {
  return (
    <div className="relative self-stretch shrink-0 w-[389.34px]" data-name="Product 3">
      <Background2 />
      <Heading4 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[32px] h-[592.17px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Product />
      <Product1 />
      <Product2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container7 />
        <Container11 />
      </div>
    </div>
  );
}

function SectionSignatureDelights() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start py-[96px] relative shrink-0 w-full" data-name="Section - Signature Delights">
      <Container6 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[56px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] w-[105.58px]">
        <p className="leading-[28px]">Purity First</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[92px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[48px] justify-center leading-[24px] relative shrink-0 text-[#94a3b8] text-[16px] w-[372.31px]">
        <p className="mb-0">Directly sourced from organic farms in Uji, Japan. No</p>
        <p>additives, no fillers, just pure leaf.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative self-stretch shrink-0 w-[378.66px]" data-name="Container">
      <div className="absolute h-[25.488px] left-[4.5px] top-[9.51px] w-[25.493px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4932 25.4885">
          <path d={svgPaths.p1e45c380} fill="var(--fill-0, #13EC13)" id="Icon" />
        </svg>
      </div>
      <Heading5 />
      <Container17 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[56px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] w-[133.98px]">
        <p className="leading-[28px]">Stone Ground</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[92px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[48px] justify-center leading-[24px] relative shrink-0 text-[#94a3b8] text-[16px] w-[335.12px]">
        <p className="mb-0">Slow-milled using traditional granite stones to</p>
        <p>preserve the vibrant color and complex umami.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative self-stretch shrink-0 w-[378.67px]" data-name="Container">
      <div className="absolute h-[24px] left-[2.25px] top-[8px] w-[29.25px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.25 24">
          <path d={svgPaths.pce603c0} fill="var(--fill-0, #13EC13)" id="Icon" />
        </svg>
      </div>
      <Heading6 />
      <Container19 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[56px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] w-[116.28px]">
        <p className="leading-[28px]">Sustainable</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[92px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[48px] justify-center leading-[24px] relative shrink-0 text-[#94a3b8] text-[16px] w-[359.26px]">
        <p className="mb-0">Supporting small-batch farmers through fair trade</p>
        <p>and ecological farming practices.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative self-stretch shrink-0 w-[378.66px]" data-name="Container">
      <div className="absolute h-[33px] left-[2.25px] top-[2px] w-[33.75px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.75 33">
          <path d={svgPaths.pd6677c0} fill="var(--fill-0, #13EC13)" id="Icon" />
        </svg>
      </div>
      <Heading7 />
      <Container21 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] items-start justify-center relative size-full">
        <Container16 />
        <Container18 />
        <Container20 />
      </div>
    </div>
  );
}

function SectionFeatures() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section - Features">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[24px] py-[97px] relative w-full">
        <Container15 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Playfair_Display:Regular_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[48px] w-full">
        <p className="leading-[48px]">Visit our Sanctuary</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
        <g id="Margin">
          <path d={svgPaths.p23890c00} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[148.41px]">
        <p className="leading-[24px]">Tokyo Omotesando</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] w-[287.92px]">
        <p className="leading-[24px]">4 Chome-26-14 Jingumae, Shibuya City</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[287.92px]" data-name="Container">
      <Heading9 />
      <Container26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin />
      <Container25 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g id="Margin">
          <path d={svgPaths.p8153600} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[127.53px]">
        <p className="leading-[24px]">Operating Hours</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] w-[235.95px]">
        <p className="leading-[24px]">Mon - Sun: 08:00 AM - 09:00 PM</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[235.95px]" data-name="Container">
      <Heading10 />
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin1 />
      <Container28 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[6px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#13ec13] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] text-center tracking-[1.6px] uppercase w-[128.55px]">
        <p className="leading-[24px]">Book a Table</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container27 />
      <Container30 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[583.95px]" data-name="Container">
      <Heading8 />
      <Container23 />
    </div>
  );
}

function MapOfTokyo() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Map of Tokyo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[178.26%] left-0 max-w-none top-[-39.13%] w-full" src={imgMapOfTokyo} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#1e293b] relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <MapOfTokyo />
        </div>
        <div className="absolute bg-[rgba(19,236,19,0.1)] inset-0 mix-blend-overlay" data-name="Overlay" />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="aspect-video opacity-70 relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] w-full">
        <Background3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MapLocationSection() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Map/Location Section">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center max-w-[inherit] pt-[96px] px-[24px] relative w-full">
          <Container22 />
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function MainHeroSection() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[96px] pt-[80px] relative shrink-0 w-full" data-name="Main - Hero Section">
      <Section />
      <SectionSignatureDelights />
      <SectionFeatures />
      <MapLocationSection />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[25px] relative shrink-0 w-[23.007px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0069 25">
        <g id="Container">
          <path d={svgPaths.p3db93100} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] tracking-[-1px] uppercase w-[102.06px]">
        <p className="leading-[28px]">Ceremony</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="mb-0">Elevating the traditional Japanese tea</p>
        <p className="mb-0">experience through modern design and</p>
        <p>uncompromising quality.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.75px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container34 />
      <Container37 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Explore</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">The Menu</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Tea Sourcing</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Events</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Shop Tools</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading11 />
      <List />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Support</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Contact Us</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Reservations</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">Shipping Policy</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px]">FAQ</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading12 />
      <List1 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[12px] tracking-[1.2px] uppercase w-[90.64px]">
        <p className="leading-[16px]">Newsletter</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-[253.81px]">
        <p className="mb-0">Join our inner circle for exclusive blends</p>
        <p>and events.</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Your email</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-tl-[8px] self-stretch" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #0A0A0A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#13ec13] content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Button">
      <Container44 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex items-start left-0 right-0 top-[96px]" data-name="Container">
      <Input />
      <Button3 />
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading13 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[48px] h-[168px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] w-[251.33px]">
          <p className="leading-[16px]">© 2024 Ceremony Matcha. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.pf778600} fill="var(--fill-0, #475569)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <path d={svgPaths.p15b83880} fill="var(--fill-0, #475569)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #475569)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] h-full items-start relative">
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container31() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container32 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start pb-[40px] pt-[81px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container31 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[25px] relative shrink-0 w-[23.007px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0069 25">
        <g id="Container">
          <path d={svgPaths.p3db93100} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] tracking-[-1px] uppercase w-[102.06px]">
        <p className="leading-[28px]">Ceremony</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-[45.5px]">
        <p className="leading-[20px]">Home</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-[45.14px]">
        <p className="leading-[20px]">Menu</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-[53.28px]">
        <p className="leading-[20px]">About</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-[75.33px]">
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Nav">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#13ec13] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[1.4px] uppercase w-[96.16px]">
        <p className="leading-[20px]">Order Now</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[80px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
          <Container48 />
          <Nav />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] content-stretch flex flex-col items-start left-0 pb-px top-0 w-[1280px]" data-name="Header - Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container47 />
    </div>
  );
}

export default function HomePageUpdated() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="Home Page (Updated)">
      <MainHeroSection />
      <Footer />
      <HeaderNavigation />
    </div>
  );
}