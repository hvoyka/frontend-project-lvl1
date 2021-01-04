#!/usr/bin/env node

import { greeting } from '../src/cli';
import even from './brain-even';

console.log('Welcome to the Brain Games!');

greeting();
even();
