import svgPaths from "./svg-y1momkwszr";
import imgHeroSection from "figma:asset/131f5988176d9731d0078e3ff93e6f67871d44c6.png";
import imgImage from "figma:asset/6c79bfdc171c0fa044075654e810f5bf891d85b1.png";
import imgImageBorder from "figma:asset/ec1ad1160c93d88b48abff00623f469bf0ded527.png";

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Connect with us</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white tracking-[-1.2px] w-full">
        <p className="leading-[48px]">Find Your Center</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[32px] relative w-full">
        <Container4 />
        <Heading />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end min-h-[320px] overflow-clip pt-[184px] relative rounded-[12px] shrink-0 w-full" data-name="Hero Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#0a0a0a] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[350%] left-0 max-w-none top-[-125%] w-full" src={imgHeroSection} />
        </div>
        <div className="absolute bg-gradient-to-b from-[40%] from-[rgba(16,34,16,0)] inset-0 rounded-[12px] to-[rgba(16,34,16,0.9)]" />
      </div>
      <Container3 />
    </div>
  );
}

function HeroSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Hero Section:margin">
      <HeroSection />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] w-full">
        <p className="leading-[36px]">Visit Our Sanctuary</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[#94a3b8] text-[16px] w-full">
        <p className="mb-0">Step into a world of tranquility. Our space is designed to</p>
        <p className="mb-0">slow time and awaken your senses through the art of fine</p>
        <p>matcha.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container7 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="h-[44px] relative shrink-0 w-[40px]" data-name="Overlay">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 44">
        <g id="Overlay">
          <rect fill="var(--fill-0, #13EC13)" fillOpacity="0.1" height="44" rx="8" width="40" />
          <path d={svgPaths.p75b60c0} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[12px] tracking-[0.6px] uppercase w-[64.17px]">
        <p className="leading-[16px]">Location</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[20px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white w-[287.83px]">
        <p className="leading-[28px]">124 Tranquility Lane, Kyoto District</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[48px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[123.53px]">
        <p className="leading-[20px]">Portland, OR 97204</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[68px] relative shrink-0 w-[287.83px]" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container10 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[44px]" data-name="Overlay">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 40">
        <g id="Overlay">
          <rect fill="var(--fill-0, #13EC13)" fillOpacity="0.1" height="40" rx="8" width="44" />
          <path d={svgPaths.p12dd820} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[12px] tracking-[0.6px] uppercase w-[38.11px]">
        <p className="leading-[16px]">Email</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white w-[253.91px]">
        <p className="leading-[28px]">hello@ceremony-matcha.com</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[253.91px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay1 />
      <Container15 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="Overlay">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Overlay">
          <rect fill="var(--fill-0, #13EC13)" fillOpacity="0.1" height="42" rx="8" width="42" />
          <path d={svgPaths.p1898d700} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[12px] tracking-[0.6px] uppercase w-[43.95px]">
        <p className="leading-[16px]">Phone</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white w-[130.77px]">
        <p className="leading-[28px]">+1 503 555 0123</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[130.77px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay2 />
      <Container19 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container14 />
      <Container18 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p256e1340} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container22 />
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[143.72px]">
          <p className="leading-[28px]">Opening Hours</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] w-[115.7px]">
          <p className="leading-[24px]">Monday - Friday</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[104.41px]">
          <p className="leading-[24px]">08:00 — 18:00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[9px] relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] w-[66.61px]">
          <p className="leading-[24px]">Saturday</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[105.36px]">
          <p className="leading-[24px]">09:00 — 19:00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex h-[33px] items-start justify-between pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] w-[55.16px]">
        <p className="leading-[24px]">Sunday</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[54.17px]">
        <p className="leading-[24px]">Closed</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pr-[0.01px] relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <HorizontalBorder />
        <HorizontalBorder1 />
        <Container28 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.03)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(19,236,19,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative w-full">
        <Heading2 />
        <Container23 />
      </div>
    </div>
  );
}

function ContactDetailsHours() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative self-stretch shrink-0 w-[438.66px]" data-name="Contact Details & Hours">
      <Container6 />
      <Container8 />
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">
        <p className="leading-[20px]">First Name</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">Your first name</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[14px] relative w-full">
          <Container33 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[263.66px]" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">
        <p className="leading-[20px]">Last Name</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">Your last name</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[14px] relative w-full">
          <Container35 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[263.67px]" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.99px] items-start justify-center relative size-full">
        <Container32 />
        <Container34 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">
        <p className="leading-[20px]">Email Address</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">email@example.com</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[14px] relative w-full">
          <Container37 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Label2 />
        <Input2 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">
        <p className="leading-[20px]">Subject</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start justify-center left-0 overflow-clip pl-[518.33px] pr-[9px] py-[13px] top-0 w-[551.33px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container39() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[17px] overflow-clip right-[17px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[110.53px]">
        <p className="leading-[24px]">General Inquiry</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ImageFill />
      <Container39 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Label3 />
        <Options />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-full">
        <p className="leading-[20px]">Your Message</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[24px]">How can we help you?</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[85px] pt-[13px] px-[17px] relative w-full">
          <Container41 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Label4 />
        <Textarea />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
        <g id="Container">
          <path d={svgPaths.pb36e280} fill="var(--fill-0, #0A0A0A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#13ec13] content-stretch flex gap-[8.01px] items-center justify-center pl-[203.54px] pr-[203.56px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] text-center w-[112.2px]">
        <p className="leading-[24px]">Send Message</p>
      </div>
      <Container42 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative">
        <Button />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.03)] relative rounded-[12px] shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[rgba(19,236,19,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[41px] relative w-full">
        <Container31 />
        <Container36 />
        <Container38 />
        <Container40 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[633.33px]" data-name="Contact Form">
      <Form />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[48px] h-[662px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <ContactDetailsHours />
      <ContactForm />
    </div>
  );
}

function MapSection() {
  return (
    <div className="h-[400px] opacity-80 relative rounded-[12px] shrink-0 w-full" data-name="Map Section">
      <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[280.9%] left-0 max-w-none top-[-90.45%] w-full" src={imgImage} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function MapSectionMargin() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-start pt-[80px] relative shrink-0 w-full" data-name="Map Section:margin">
      <MapSection />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1200px] px-[40px] py-[48px] relative shrink-0 w-[1200px]" data-name="Container">
      <HeroSectionMargin />
      <Container5 />
      <MapSectionMargin />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[12px] right-0 top-[89px]" data-name="Main">
      <Container2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[16.992px] relative shrink-0 w-[16.995px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9955 16.9923">
        <g id="Container">
          <path d={svgPaths.p12cee600} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[14px] tracking-[-0.7px] w-[174.86px]">
        <p className="leading-[20px]">CEREMONY MATCHA © 2024</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="opacity-60 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[65.03px]">
        <p className="leading-[20px]">Instagram</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[59.61px]">
        <p className="leading-[20px]">Pinterest</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[47.5px]">
        <p className="leading-[20px]">Journal</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] h-full items-start relative">
        <Link />
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[149.78px]">
          <p className="leading-[16px]">Handcrafted for Tranquility.</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pb-[48px] pl-[80px] pr-[80.02px] pt-[49px] right-0 top-[1707px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container43 />
      <Container46 />
      <Container47 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1c048500} fill="var(--fill-0, #13EC13)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[25px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] tracking-[-0.5px] w-[168.58px]">
        <p className="leading-[25px]">Ceremony Matcha</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container49 />
        <Heading3 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-[36.83px]">
        <p className="leading-[20px]">Menu</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-[34.09px]">
        <p className="leading-[20px]">Shop</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-[73.3px]">
        <p className="leading-[20px]">Experience</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[14px] w-[56px]">
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative self-stretch shrink-0" data-name="Nav">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start justify-end relative w-full">
        <Nav />
        <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="Image+Border">
          <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
            <img alt="" className="absolute left-[5%] max-w-none size-[90%] top-[5%]" src={imgImageBorder} />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[rgba(19,236,19,0.2)] border-solid inset-0 rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] content-stretch flex items-center justify-between left-0 pb-[25px] pt-[24px] px-[80px] right-0 top-0" data-name="Header - Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container48 />
      <Container50 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1828px] relative shrink-0 w-full" data-name="Container">
      <Main />
      <Footer />
      <HeaderNavigation />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[1828px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function ContactPageUpdated() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="Contact Page (Updated)">
      <Container />
    </div>
  );
}