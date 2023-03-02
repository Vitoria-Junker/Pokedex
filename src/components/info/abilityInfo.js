import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AbilityInfo = ({ abilities }) => {
  const [abilityInfo, setAbilityInfo] = useState([]);

  useEffect(() => {
     const loadedAbilities = new Set();

    const getAbilityInfo = async (url) => {
       const res = await fetch(url);
       const data = await res.json();
       setAbilityInfo((abilityInfo) => [...abilityInfo, data]);
    };

    if (abilities) {
      abilities.forEach((ability) => {
        if (!loadedAbilities.has(ability.ability.url)) {
          loadedAbilities.add(ability.ability.url);
          getAbilityInfo(ability.ability.url);
        }
      });
    }

    return () => {
      // Remove event listeners here
    };
  }, [abilities]);

  const abilityList = abilityInfo.map((ability, index) => (
    <li key={index}>
      <h4>{ability.name}</h4>
      <p>{ability.effect_entries[0].effect}</p>
    </li>
  ));

  return <Ul>{abilityList}</Ul>;
};

const Ul = styled.ul`
  list-style: none;
  line-height: 1.5;
  color:#efe6e6;
  text-shadow: 1px -1px 2px rgba(52,42,61,0.35);
`;

export default AbilityInfo;