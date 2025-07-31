'use client';

import Spline from '@splinetool/react-spline';

export default function SplineViewer() {
  return (
    <div className="w-full h-[500px]">
      <Spline className="ml-[-3rem] mt-[-2rem]" scene="https://prod.spline.design/4XfTcmo07uvEQ2P1/scene.splinecode" />
    </div>
  );
}
