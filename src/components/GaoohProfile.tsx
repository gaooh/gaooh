import React from "react";

const GaoohProfile = () => {
  return (
    <div className="max-w-xl mx-auto my-8 p-4 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">gaooh</h1>
      <p className="mb-6 text-center">
        ソフトウェアエンジニア。猫とライオンをこよなく愛し、ビールを片手にロードバイクで走ることが好きです。
      </p>
      <ul className="space-y-2">
        <li>
          <a className="text-blue-500 underline" href="https://gaooh.hatenablog.com/">Blog</a>
        </li>
        <li>
          <a className="text-blue-500 underline" href="https://x.com/gaooh">X (Twitter)</a>
        </li>
        <li>
          <a className="text-blue-500 underline" href="https://www.instagram.com/gaooh/">Instagram</a>
        </li>
        <li>
          <a className="text-blue-500 underline" href="https://www.facebook.com/akiko.asami">Facebook</a>
        </li>
        <li>
          <a className="text-blue-500 underline" href="https://www.wantedly.com/id/gaooh">Wantedly</a>
        </li>
        <li>
          <a className="text-blue-500 underline" href="https://www.strava.com/athletes/89243892">Strava</a>
        </li>
      </ul>
    </div>
  );
};

export default GaoohProfile;
