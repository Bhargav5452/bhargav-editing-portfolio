'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  profile,
  contact,
  education,
  expertise,
  interests,
  languages,
} from '@/lib/data';
import { DaVinciResolve } from '@/components/icons/SoftwareIcons';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[1440px] px-6 lg:px-[64px] py-10 lg:py-[64px] bg-[#111111]"
    >
      {/* 4 Columns Container matching exact Figma layout Node 2:2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[400px_240px_216px_216px] gap-10 lg:gap-[64px] xl:gap-[80px] items-start justify-center">

        {/* ── COL 1: Profile and contact (Node 2:3) ── */}
        <div className="flex flex-col items-start w-full max-w-[400px]">
          
          {/* Portrait (Node 2:20, size: 224px, responsive on mobile) */}
          <div
            className="relative size-[180px] sm:size-[224px] rounded-full overflow-hidden border-2 border-[rgba(255,255,255,0.14)] shadow-2xl bg-[#1a1a1a] mb-[16px] shrink-0 group transition-all"
            style={{
              transform: inView ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.88)',
              opacity: inView ? 1 : 0,
              transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            }}
          >
            <Image
              src={profile.portrait}
              alt={profile.name}
              width={224}
              height={224}
              priority
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Name and professions (Node 2:21) */}
          <div
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.22s, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.22s',
            }}
          >
            <h1
              className="text-[#e3c40a] text-[32px] sm:text-[40px] leading-[42px] sm:leading-[50px] font-black tracking-normal"
              style={{ fontFamily: "'Elsie', serif" }}
            >
              {profile.name}
            </h1>
            <p className="text-[#f5f5f2] text-lg sm:text-[20px] leading-[26px] sm:leading-[28px] font-normal font-sans mt-1">
              {profile.role}
            </p>
          </div>

          {/* Biography divider (Node 2:25, w: 67px, h: 2px) */}
          <div
            className="h-[2px] bg-[#f5f5f2] my-[24px]"
            style={{
              width: inView ? '67px' : '0px',
              transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
            }}
          />

          {/* Professional biography (Node 2:26) */}
          <p
            className="text-[#f5f5f2] text-[18px] leading-[28px] font-normal font-sans"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.42s, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.42s',
            }}
          >
            {profile.bio}
          </p>

          {/* Contact information (Node 2:27) */}
          <div
            className="pt-[24px] flex flex-col items-start"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            <h2
              className="text-[#e3c40a] text-[30px] leading-[40px] font-black"
              style={{ fontFamily: "'Elsie', serif" }}
            >
              Contact
            </h2>
            <div className="flex flex-col gap-0.5 mt-2 text-[#f5f5f2] text-[18px] leading-[28px] font-sans">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-[#e3c40a] transition-colors"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="hover:text-[#e3c40a] transition-colors"
              >
                {contact.phone}
              </a>
              <span>{contact.location}</span>
            </div>
          </div>
        </div>

        {/* ── COL 2: Education and expertise (Node 2:4) ── */}
        <div className="flex flex-col items-start w-full lg:pt-[64px]">
          
          {/* Education timeline (Node 2:36, h: 264px) */}
          <div className="relative w-full pb-[48px]">
            <div
              className="pl-[20px]"
              style={{
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
              }}
            >
              <h2
                className="text-[#e3c40a] text-[30px] leading-[40px] font-black"
                style={{ fontFamily: "'Elsie', serif" }}
              >
                Education
              </h2>
            </div>

            {/* Timeline rule & point */}
            <div
              className="absolute bg-[#f5f5f2] h-[68px] left-0 top-[68px] w-[1.5px] origin-top"
              style={{
                transform: inView ? 'scaleY(1)' : 'scaleY(0)',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
              }}
            />
            <div
              className="absolute left-[-2.75px] size-[7px] top-[64.5px]"
              style={{
                transform: inView ? 'scale(1)' : 'scale(0)',
                transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s',
              }}
            >
              <Image
                src="/figma/timeline-point.svg"
                alt=""
                width={7}
                height={7}
                className="size-full"
              />
            </div>

            {/* Qualifications */}
            <div
              className="pl-[20px] pt-[16px]"
              style={{
                transform: inView ? 'translateY(0)' : 'translateY(18px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
              }}
            >
              <p className="text-[#f5f5f2] text-[16px] leading-[24px] opacity-75 font-sans">
                {education.period}
              </p>
              <p className="text-[#f5f5f2] text-[22px] leading-[30px] font-normal font-sans mt-0.5">
                {education.degree}
              </p>
              <p className="text-[#f5f5f2] text-[18px] leading-[26px] font-normal font-sans">
                {education.institution}
              </p>
            </div>
          </div>

          {/* Expertise timeline (Node 2:55) */}
          <div className="relative w-full">
            <div
              className="pl-[20px]"
              style={{
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
              }}
            >
              <h2
                className="text-[#e3c40a] text-[30px] leading-[40px] font-black"
                style={{ fontFamily: "'Elsie', serif" }}
              >
                Expertise
              </h2>
            </div>

            {/* Timeline rule & 3 points */}
            <div
              className="absolute bg-[#f5f5f2] h-[80px] left-0 top-[70px] w-[1.5px] origin-top"
              style={{
                transform: inView ? 'scaleY(1)' : 'scaleY(0)',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
              }}
            />
            {[66.5, 106.5, 146.5].map((topPos, idx) => (
              <div
                key={idx}
                className="absolute left-[-2.75px] size-[7px]"
                style={{
                  top: `${topPos}px`,
                  transform: inView ? 'scale(1)' : 'scale(0)',
                  transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.55 + idx * 0.08}s`,
                }}
              >
                <Image src="/figma/timeline-point.svg" alt="" width={7} height={7} />
              </div>
            ))}

            {/* Expertise list */}
            <div className="pl-[20px] pt-[16px] flex flex-col gap-[12px] text-[#f5f5f2] text-[20px] leading-[28px] font-sans">
              {expertise.map((item, idx) => (
                <p
                  key={idx}
                  style={{
                    transform: inView ? 'translateX(0)' : 'translateX(-12px)',
                    opacity: inView ? 1 : 0,
                    transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + idx * 0.08}s, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + idx * 0.08}s`,
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

        </div>

        {/* ── COL 3: Software skills (Node 2:5) ── */}
        <div className="flex flex-col items-start w-full lg:pt-[64px]">
          <div
            className="pl-[20px]"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            <h2
              className="text-[#e3c50a] text-[30px] leading-[40px] font-black"
              style={{ fontFamily: "'Elsie', serif" }}
            >
              Softwares
            </h2>
          </div>

          {/* Application grid (Node 2:98, w: 208px, gap: 24px) */}
          <div className="pt-[16px] grid grid-cols-2 gap-x-[24px] gap-y-[28px] w-[208px]">
            
            {/* Premiere Pro skill (Node 2:100) */}
            <div
              className="flex flex-col items-center gap-[12px] w-[92px] group cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.85)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.42s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.42s',
              }}
            >
              <div className="size-[50px] bg-[#06005a] rounded-[9px] flex items-center justify-center shadow-lg border border-[rgba(153,153,255,0.2)] transition-shadow duration-300 group-hover:shadow-[0_8px_20px_rgba(153,153,255,0.35)]">
                <span className="text-[#9999FF] text-[31px] font-bold leading-none font-sans">Pr</span>
              </div>
              <div className="text-[#e3c50a] text-[18px] leading-[24px] text-center font-sans">
                <p>Premiere</p>
                <p>Pro</p>
              </div>
            </div>

            {/* After Effects skill (Node 2:104) */}
            <div
              className="flex flex-col items-center gap-[12px] w-[92px] group cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.85)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
              }}
            >
              <div className="size-[50px] bg-[#08005a] rounded-[9px] flex items-center justify-center shadow-lg border border-[rgba(153,153,255,0.2)] transition-shadow duration-300 group-hover:shadow-[0_8px_20px_rgba(153,153,255,0.35)]">
                <span className="text-[#9999FF] text-[31px] font-bold leading-none font-sans">Ae</span>
              </div>
              <div className="text-[#e3c50a] text-[18px] leading-[24px] text-center font-sans">
                <p>After</p>
                <p>Effects</p>
              </div>
            </div>

            {/* DaVinci Resolve skill (Node 2:138) */}
            <div
              className="flex flex-col items-center gap-[12px] w-[92px] group cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.85)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.58s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.58s',
              }}
            >
              <div className="size-[50px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <DaVinciResolve size={50} />
              </div>
              <div className="text-[#e3c50a] text-[18px] leading-[24px] text-center font-sans">
                <p>Davinci</p>
                <p>Resolve</p>
              </div>
            </div>

            {/* Canva skill (Node 2:141) */}
            <div
              className="flex flex-col items-center gap-[12px] w-[92px] group cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.85)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.66s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.66s',
              }}
            >
              <div className="size-[50px] rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/figma/canva-logo.png"
                  alt="Canva"
                  width={50}
                  height={50}
                  className="size-full object-cover"
                />
              </div>
              <p className="text-[#e3c50a] text-[18px] leading-[24px] text-center font-sans pt-[6px]">
                Canva
              </p>
            </div>

          </div>
        </div>

        {/* ── COL 4: Interests and languages (Node 2:6) ── */}
        <div className="flex flex-col items-start w-full lg:pt-[64px]">
          
          {/* Interests timeline (Node 2:74, h: 264px) */}
          <div className="relative w-full pb-[48px]">
            <div
              className="pl-[20px]"
              style={{
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
              }}
            >
              <h2
                className="text-[#e3c40a] text-[30px] leading-[40px] font-black"
                style={{ fontFamily: "'Elsie', serif" }}
              >
                Interests
              </h2>
            </div>

            {/* Timeline rule & 3 points */}
            <div
              className="absolute bg-[#f5f5f2] h-[80px] left-0 top-[70px] w-[1.5px] origin-top"
              style={{
                transform: inView ? 'scaleY(1)' : 'scaleY(0)',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
              }}
            />
            {[66.5, 106.5, 146.5].map((topPos, idx) => (
              <div
                key={idx}
                className="absolute left-[-2.75px] size-[7px]"
                style={{
                  top: `${topPos}px`,
                  transform: inView ? 'scale(1)' : 'scale(0)',
                  transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.5 + idx * 0.08}s`,
                }}
              >
                <Image src="/figma/timeline-point.svg" alt="" width={7} height={7} />
              </div>
            ))}

            {/* Interests list */}
            <div className="pl-[20px] pt-[16px] flex flex-col gap-[12px] text-[#f5f5f2] text-[20px] leading-[28px] font-sans">
              {interests.map((item, idx) => (
                <p
                  key={idx}
                  style={{
                    transform: inView ? 'translateX(0)' : 'translateX(-12px)',
                    opacity: inView ? 1 : 0,
                    transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.55 + idx * 0.08}s, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.55 + idx * 0.08}s`,
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Languages timeline (Node 2:85) */}
          <div className="relative w-full">
            <div
              className="pl-[20px]"
              style={{
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
              }}
            >
              <h2
                className="text-[#e3c40a] text-[30px] leading-[40px] font-black"
                style={{ fontFamily: "'Elsie', serif" }}
              >
                Languages
              </h2>
            </div>

            {/* Timeline rule & 3 points */}
            <div
              className="absolute bg-[#f5f5f2] h-[80px] left-0 top-[70px] w-[1.5px] origin-top"
              style={{
                transform: inView ? 'scaleY(1)' : 'scaleY(0)',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
              }}
            />
            {[66.5, 106.5, 146.5].map((topPos, idx) => (
              <div
                key={idx}
                className="absolute left-[-2.75px] size-[7px]"
                style={{
                  top: `${topPos}px`,
                  transform: inView ? 'scale(1)' : 'scale(0)',
                  transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.65 + idx * 0.08}s`,
                }}
              >
                <Image src="/figma/timeline-point.svg" alt="" width={7} height={7} />
              </div>
            ))}

            {/* Language list */}
            <div className="pl-[20px] pt-[16px] flex flex-col gap-[12px] text-[#f5f5f2] text-[20px] leading-[28px] font-sans">
              {languages.map((item, idx) => (
                <p
                  key={idx}
                  style={{
                    transform: inView ? 'translateX(0)' : 'translateX(-12px)',
                    opacity: inView ? 1 : 0,
                    transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + idx * 0.08}s, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + idx * 0.08}s`,
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

