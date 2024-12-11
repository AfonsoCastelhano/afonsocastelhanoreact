/* /components/MunicipalityCard/MunicipalityCard.tsx */

import React from 'react';
import { Municipality } from '@/models/interfaces'; // Importa a interface correta

// Define o componente com a tipagem explícita
export default function MunicipalityCard({ id, district_name, name }: Municipality) {
    return <div>{name} ({district_name})</div>;
}