'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Banner.module.scss';
import Button from '../button/Button';

import { IBrand } from '@/interfaces/interfaces';
import { brands } from '@/constans/constants';

import Enix from '/public/png/enix.png';
import Equilica from '/public/png/equilica.png';
import Achivers from '/public/png/achivers.png';

const brandImages = {
  enix: Enix,
  equilica: Equilica,
  achivers: Achivers
};

type BrandKeys = keyof typeof brandImages;

export default function Banner() {
  const [hoveredBrand, setHoveredBrand] = useState<BrandKeys>();

  const handleMouseEnter = (id: BrandKeys) => {
    setHoveredBrand(id);
  };

  const handleMouseLeave = () => {
    setHoveredBrand(undefined);
  };

  return (
    <div className={styles.banner}>
      {brands.map(({ id, name, description }: IBrand) => (
        <div
          key={id}
          id={id}
          onMouseEnter={() => handleMouseEnter(id as BrandKeys)}
          onMouseLeave={handleMouseLeave}
          className={styles.column}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.text}>{description}</p>
          <div className={styles.btn_box}>
            <Button style='default' text='Подробнее о бренде' href='#' />
          </div>
          <Link className={styles.link} href='#'></Link>
        </div>
      ))}
      {hoveredBrand && (
        <Image fill src={brandImages[hoveredBrand]}
          alt={hoveredBrand} priority
        />
      )}
    </div>
  );
}
