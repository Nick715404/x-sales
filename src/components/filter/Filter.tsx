'use client'

import styles from './Filters.module.scss';

import { filterTags } from "@/constans/constants";
import { IFilterTag } from "@/interfaces/interfaces";
import { useState } from 'react';

type Props = {}

export default function Filter({ }: Props) {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  console.log(activeIndex);


  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.filters}>
      <ul className={styles.list}>
        {filterTags.map((filter: IFilterTag, index) =>
          <li
            key={filter.label}
            data-value={`${filter.value}`}
            className={index === activeIndex
              ? 'filter-tag active-filter' : 'filter-tag'}
            onClick={() => handleClick(index)}
          >
            {filter.label}
          </li>
        )}
      </ul>
    </div>
  )
}
