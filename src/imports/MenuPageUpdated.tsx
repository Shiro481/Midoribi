import svgPaths from "./svg-dgbld17eb4";
import imgMatchaCrepeCake from "figma:asset/b3e82a1667cb44595b157e92c4ca1bbc6dbc7bf3.png";
import imgHandcraftedMochi from "figma:asset/dbde0f2670d2dc99772c383053efe4ea29b8d75e.png";
import imgMatchaLavaCake from "figma:asset/41c4c1fec4fd44e1e1c2c016052457cb29ca210b.png";
import imgPremiumMatchaPowderArt from "figma:asset/e29dacf997a13dad088126c7b8b978082e084756.png";

function Heading1() {
  return (
    <div className="content-stretch flex items-start leading-[0] py-[0.5px] relative shrink-0 text-[30px] w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[36px] justify-center relative shrink-0 text-[#f1f5f9] w-[104.31px]">
        <p className="leading-[36px]">{`Classic `}</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Regular_Italic',sans-serif] h-[36px] justify-center not-italic relative shrink-0 text-[#13ec13] w-[95.77px]">
        <p className="leading-[36px]">Matcha</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[9.2px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="mb-0">Sourced from the hills of Uji, our ceremonial grade</p>
        <p className="mb-0">matcha is whisked to perfection using traditional</p>
        <p>methods.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[14.8px] items-start relative shrink-0 w-[336px]" data-name="Container">
      <Heading1 />
      <Container2 />
      <div className="bg-[rgba(19,236,19,0.5)] h-px shrink-0 w-[48px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] w-[164.69px]">
        <p className="leading-[28px]">Ceremonial Usucha</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[43.08px]">
        <p className="leading-[24px]">$7.50</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
          <Heading2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
          <p className="leading-[16px]">Thin, frothy whisked tea with a smooth, umami finish.</p>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 pb-[25px] right-[376px] top-0" data-name="Item">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] w-[138.06px]">
        <p className="leading-[28px]">Koicha Espresso</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[45.83px]">
        <p className="leading-[24px]">$9.00</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Heading3 />
        <Container8 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
          <p className="leading-[16px]">Thick, syrupy concentrate for the true connoisseur.</p>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[376px] pb-[25px] right-0 top-0" data-name="Item">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container7 />
      <Container9 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] w-[127.89px]">
        <p className="leading-[28px]">Iced Mizu Clear</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[44.77px]">
        <p className="leading-[24px]">$6.50</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Heading4 />
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
          <p className="leading-[16px]">Pure matcha over crystal ice for ultimate refreshment.</p>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 pb-[25px] right-[376px] top-[109px]" data-name="Item">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] w-[146.56px]">
        <p className="leading-[28px]">Genmaicha Blend</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[45.91px]">
        <p className="leading-[24px]">$6.00</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
          <Heading5 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
          <p className="leading-[16px]">Matcha dusted over toasted brown rice green tea.</p>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[376px] pb-[25px] right-0 top-[109px]" data-name="Item">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[186px] relative shrink-0 w-[720px]" data-name="Container">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Section1ClassicMatcha() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Section 1: Classic Matcha">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(19,236,19,0.2)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[10px] uppercase w-[46.11px]">
        <p className="leading-[15px]">Popular</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[20px] w-[148.05px]">
          <p className="leading-[28px]">Lavender Cloud</p>
        </div>
        <Overlay />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] w-full">
          <p className="mb-0">Ceremonial matcha, organic oat milk, and</p>
          <p>house-made lavender honey.</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[44.61px]">
        <p className="leading-[24px]">$8.50</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p957df70} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[12px] text-center w-[24.86px]">
        <p className="leading-[16px]">ADD</p>
      </div>
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative w-full">
        <Container20 />
        <Button />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(19,236,19,0.05)] content-stretch flex flex-col gap-[12px] items-start left-0 p-[25px] right-[376px] rounded-[12px] top-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(19,236,19,0.2)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[10px] uppercase w-[55.7px]">
        <p className="leading-[15px]">Signature</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[20px] w-[184.91px]">
          <p className="leading-[28px]">Black Sesame Latte</p>
        </div>
        <Overlay1 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] w-full">
          <p className="mb-0">Earthy black sesame paste swirled with</p>
          <p>creamy matcha and almond milk.</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[42.63px]">
        <p className="leading-[24px]">$8.75</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p957df70} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[12px] text-center w-[24.86px]">
        <p className="leading-[16px]">ADD</p>
      </div>
      <Container26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative w-full">
        <Container25 />
        <Button1 />
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="absolute bg-[rgba(19,236,19,0.05)] content-stretch flex flex-col gap-[12px] items-start left-[376px] p-[25px] right-0 rounded-[12px] top-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(19,236,19,0.2)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[10px] uppercase w-[36.52px]">
        <p className="leading-[15px]">Floral</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[20px] w-[129.64px]">
          <p className="leading-[28px]">Sea Salt Rose</p>
        </div>
        <Overlay2 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] w-full">
          <p className="mb-0">Delicate rose-infused milk topped with</p>
          <p>matcha and a pinch of Okinawa sea salt.</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[44.61px]">
        <p className="leading-[24px]">$8.50</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p957df70} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[12px] text-center w-[24.86px]">
        <p className="leading-[16px]">ADD</p>
      </div>
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative w-full">
        <Container30 />
        <Button2 />
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="absolute bg-[rgba(19,236,19,0.05)] content-stretch flex flex-col gap-[12px] items-start left-0 p-[25px] right-[376px] rounded-[12px] top-[202px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(19,236,19,0.2)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[10px] uppercase w-[33.91px]">
        <p className="leading-[15px]">Sweet</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[20px] w-[235.06px]">
          <p className="leading-[28px]">White Chocolate Matcha</p>
        </div>
        <Overlay3 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] w-full">
          <p className="mb-0">Melted artisan white chocolate integrated</p>
          <p>with ceremonial matcha.</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[16px] w-[43.67px]">
        <p className="leading-[24px]">$9.25</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p957df70} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[12px] text-center w-[24.86px]">
        <p className="leading-[16px]">ADD</p>
      </div>
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative w-full">
        <Container35 />
        <Button3 />
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(19,236,19,0.05)] content-stretch flex flex-col gap-[12px] items-start left-[376px] p-[25px] right-0 rounded-[12px] top-[202px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[372px] relative shrink-0 w-[720px]" data-name="Container">
      <OverlayBorder />
      <OverlayBorder1 />
      <OverlayBorder2 />
      <OverlayBorder3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex items-start justify-end leading-[0] relative shrink-0 text-[30px] text-right w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Playfair_Display:Regular_Italic',sans-serif] h-[36px] justify-center not-italic relative shrink-0 text-[#13ec13] w-[116.25px]">
        <p className="leading-[36px]">Specialty</p>
      </div>
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[36px] justify-center relative shrink-0 text-[#f1f5f9] w-[92.09px]">
        <p className="leading-[36px]">{` Lattes`}</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[9.725px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] relative shrink-0 text-[#94a3b8] text-[14px] text-right w-[335.39px]">
        <p className="mb-0">Artfully crafted botanical blends designed to elevate</p>
        <p>your palate and nourish your soul.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[14.9px] items-end relative shrink-0 w-[336px]" data-name="Container">
      <Heading6 />
      <Container38 />
      <div className="bg-[rgba(19,236,19,0.5)] h-px shrink-0 w-[48px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Section2SpecialtyLattes() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Section 2: Specialty Lattes">
      <Container16 />
      <Container37 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[42px] leading-[0] relative shrink-0 text-[36px] text-center w-full" data-name="Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[40px] justify-center left-[calc(50%-62.78px)] text-[#f1f5f9] top-[21.5px] w-[151.05px]">
        <p className="leading-[40px]">{`Artisanal `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Regular_Italic',sans-serif] h-[40px] justify-center left-[calc(50%+75.52px)] not-italic text-[#13ec13] top-[20px] w-[125.58px]">
        <p className="leading-[40px]">Desserts</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[512px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[380.27px]">
        <p className="leading-[20px]">Crafted daily by our pastry chef using seasonal ingredients.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container40 />
    </div>
  );
}

function MatchaCrepeCake() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Matcha Crepe Cake">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[179.51%] left-0 max-w-none top-[-39.76%] w-full" src={imgMatchaCrepeCake} />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[192px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <MatchaCrepeCake />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[-0.45px] uppercase w-full">
        <p className="leading-[28px]">Matcha Mille Crepe</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">20 layers of delicate crepes and light matcha cream.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[18px] w-[59.06px]">
        <p className="leading-[28px]">$12.00</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(19,236,19,0.1)] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[12px] relative w-full">
          <Container46 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative w-full">
        <Heading8 />
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function DessertCard() {
  return (
    <div className="bg-[rgba(10,10,10,0.6)] relative rounded-[16px] self-stretch shrink-0 w-[346.66px]" data-name="Dessert Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container42 />
        <Container43 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(19,236,19,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function HandcraftedMochi() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Handcrafted Mochi">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[179.52%] left-0 max-w-none top-[-39.76%] w-full" src={imgHandcraftedMochi} />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[192px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <HandcraftedMochi />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[-0.45px] uppercase w-full">
        <p className="leading-[28px]">Artisan Mochi Set</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Choice of three: Matcha, Black Sesame, and Yuzu.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[18px] w-[60.19px]">
        <p className="leading-[28px]">$10.00</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(19,236,19,0.1)] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container53 />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[12px] relative w-full">
          <Container52 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative w-full">
        <Heading9 />
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function DessertCard1() {
  return (
    <div className="bg-[rgba(10,10,10,0.6)] relative rounded-[16px] self-stretch shrink-0 w-[346.67px]" data-name="Dessert Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container48 />
        <Container49 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(19,236,19,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MatchaLavaCake() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Matcha Lava Cake">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[179.51%] left-0 max-w-none top-[-39.76%] w-full" src={imgMatchaLavaCake} />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[192px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <MatchaLavaCake />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[-0.45px] uppercase w-full">
        <p className="leading-[28px]">Uji Lava Cake</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[16px] relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="mb-0">{`Molten white chocolate & matcha center, vanilla bean`}</p>
        <p>gelato.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[18px] w-[58.94px]">
        <p className="leading-[28px]">$14.00</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(19,236,19,0.1)] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container59 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[12px] relative w-full">
          <Container58 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative w-full">
        <Heading10 />
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function DessertCard2() {
  return (
    <div className="bg-[rgba(10,10,10,0.6)] relative rounded-[16px] self-stretch shrink-0 w-[346.66px]" data-name="Dessert Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container54 />
        <Container55 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(19,236,19,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[32px] h-[352px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <DessertCard />
      <DessertCard1 />
      <DessertCard2 />
    </div>
  );
}

function Section3ArtisanalDesserts() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Section 3: Artisanal Desserts">
      <Container39 />
      <Container41 />
    </div>
  );
}

function MenuContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] items-start left-[64px] max-w-[1152px] px-[24px] py-[64px] right-[64px] top-[893.19px]" data-name="Menu Content">
      <Section1ClassicMatcha />
      <Section2SpecialtyLattes />
      <Section3ArtisanalDesserts />
    </div>
  );
}

function PremiumMatchaPowderArt() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-40 relative w-full" data-name="Premium Matcha Powder Art">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[154.74%] left-0 max-w-none top-[-27.37%] w-full" src={imgPremiumMatchaPowderArt} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Container">
      <PremiumMatchaPowderArt />
      <div className="absolute bg-gradient-to-b from-[rgba(10,10,10,0.2)] inset-0 to-[#0a0a0a]" data-name="Gradient" />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[12px] text-center tracking-[3.6px] uppercase w-[88.61px]">
        <p className="leading-[16px]">Est. 2024</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[75px] leading-[0] relative shrink-0 text-[#f1f5f9] text-[72px] text-center w-full" data-name="Heading 1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[72px] justify-center left-[calc(50%-224.58px)] top-[38.5px] w-[140.84px]">
        <p className="leading-[72px]">{`The `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Regular_Italic',sans-serif] h-[72px] justify-center left-[calc(50%-29.12px)] not-italic top-[36px] w-[250.06px]">
        <p className="leading-[72px]">Curated</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Light',sans-serif] font-light h-[72px] justify-center left-[calc(50%+195.53px)] top-[38.5px] w-[199.23px]">
        <p className="leading-[72px]">{` Menu`}</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[512px] pt-[4px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] text-center w-[470.98px]">
        <p className="leading-[24px]">Experience the ceremonial grade difference in every sip and bite.</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center px-[16px] relative shrink-0" data-name="Container">
      <Container62 />
      <Heading />
      <Container63 />
    </div>
  );
}

function SectionHeroHeader() {
  return (
    <div className="absolute content-stretch flex h-[827.19px] items-center justify-center left-0 min-h-[300px] overflow-clip right-0 top-0" data-name="Section - Hero Header">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#13ec13] content-stretch flex flex-col items-start px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[0.6px] uppercase w-[112.5px]">
        <p className="leading-[16px]">Classic Matcha</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[118.09px]">
        <p className="leading-[16px]">Specialty Lattes</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[139.63px]">
        <p className="leading-[16px]">Artisanal Desserts</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between overflow-clip py-[8px] relative rounded-[inherit] w-full">
        <Link />
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function SectionCategoryTabs() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(10,10,10,0.95)] content-stretch flex flex-col items-start left-0 px-[208px] py-[9px] right-0 top-[827.19px]" data-name="Section - Category Tabs">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.05)] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container64 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[2251.19px] left-0 right-0 top-[73px]" data-name="Main">
      <MenuContent />
      <SectionHeroHeader />
      <SectionCategoryTabs />
    </div>
  );
}

function Container68() {
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

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[1.8px] uppercase w-[144.39px]">
        <p className="leading-[28px]">Mizu Matcha</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container68 />
      <Heading11 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container67 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-[232.06px]">
        <p className="leading-[16px]">Purity in every whisk. Tradition in every sip.</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[2.4px] uppercase w-[91.33px]">
        <p className="leading-[16px]">Instagram</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[2.4px] uppercase w-[71.44px]">
        <p className="leading-[16px]">Journal</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[2.4px] uppercase w-[50.48px]">
        <p className="leading-[16px]">Press</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[2.4px] uppercase w-[93.67px]">
        <p className="leading-[16px]">Wholesale</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[32px] h-[16px] items-start relative shrink-0" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#475569] text-[10px] w-[230.92px]">
        <p className="leading-[15px]">© 2024 MIZU MATCHA CO. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative w-full">
        <Container66 />
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function FooterFooter() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] content-stretch flex flex-col items-start left-0 pb-[48px] pt-[49px] px-[24px] right-0 top-[2324.19px]" data-name="Footer Footer">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container65 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[21.24px] relative shrink-0 w-[21.244px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2443 21.2404">
        <g id="Container">
          <path d={svgPaths.p3f7ba400} fill="var(--fill-0, #13EC13)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[20px] tracking-[-0.5px] uppercase w-[128.75px]">
        <p>
          <span className="leading-[28px]">{`Mizu `}</span>
          <span className="font-['Manrope:Light',sans-serif] font-light leading-[28px] text-[#13ec13]">Matcha</span>
        </p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[14px] w-[73.3px]">
        <p className="leading-[20px]">Experience</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#13ec13] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#13ec13] text-[14px] w-[36.83px]">
        <p className="leading-[20px]">Menu</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[14px] w-[62.05px]">
        <p className="leading-[20px]">Our Story</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[14px] w-[64.88px]">
        <p className="leading-[20px]">Locations</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container76 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p3faf9100} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container77 />
      <div className="absolute bg-[#13ec13] right-[3.99px] rounded-[9999px] size-[8px] top-[4px]" data-name="Background" />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#13ec13] content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center w-[71.06px]">
        <p className="leading-[20px]">Order Now</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container71() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pr-[0.02px] relative w-full">
          <Container72 />
          <Nav />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavigation() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(10,10,10,0.9)] content-stretch flex flex-col items-start left-0 pb-[17px] pt-[16px] px-[80px] right-0 top-0" data-name="Header - Top Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(19,236,19,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container71 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[2473.19px] min-h-[2068px] relative shrink-0 w-full" data-name="Container">
      <Main />
      <FooterFooter />
      <HeaderTopNavigation />
    </div>
  );
}

export default function MenuPageUpdated() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="Menu Page (Updated)">
      <Container />
    </div>
  );
}