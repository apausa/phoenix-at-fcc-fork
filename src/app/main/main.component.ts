import { Component, AfterViewInit, inject } from '@angular/core';
import { EventDisplayService } from 'phoenix-ui-components';

/** A folder of geometry modifications under `assets/detectors`. */
interface GeometryVariant {
  id: string;
  title: string;
}

interface DetectorCard {
  name: string;
  version?: string;
  description: string;
  logo: string;
  logoAlt: string;
  /** Route path of the detector page, relative to the variant. */
  path: string;
  /** ROOT file shown in the detailed detector visualization link. */
  rootFile: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false,
})
export class MainComponent implements AfterViewInit {
  private eventDisplay = inject(EventDisplayService);

  year: number;

  variants: GeometryVariant[] = [
    { id: '1-blue-volumes', title: '1. Blue volumes' },
    { id: '2-gray-volumes', title: '2. Gray volumes' },
    { id: '3-shrinked-volumes', title: '3. Shrinked volumes' },
    { id: '4-resolved-references', title: '4. Resolved references' },
    { id: '5-filled-volumes', title: '5. Filled volumes' },
  ];

  detectors: DetectorCard[] = [
    {
      name: 'ALLEGRO',
      version: 'o2_v01',
      description: 'Explore events in the FCC-ee ALLEGRO detector concept.',
      logo: 'assets/images/0_ALLEGRO_logo_Original_crop_v1.svg',
      logoAlt: 'FCC-ee Noble Liquid based detector concept',
      path: 'fccee-allegro/o2_v01',
      rootFile: 'ALLEGRO_o2_v01.root',
    },
    {
      name: 'CLD',
      version: 'o4_v05',
      description: 'Explore events in the FCC-ee CLD detector concept.',
      logo: 'assets/images/cld_logo_transparent.png',
      logoAlt: 'CLD Logo',
      path: 'fccee-cld/o4_v05',
      rootFile: 'CLD_o4_v05.root',
    },
    {
      name: 'IDEA',
      version: 'o1_v02',
      description: 'Explore events in the FCC-ee IDEA detector concept.',
      logo: 'assets/images/idea_logo_transparent.png',
      logoAlt: 'FCC-ee IDEA',
      path: 'fccee-idea/o1_v02',
      rootFile: 'IDEA_o1_v02.root',
    },
    {
      name: 'ILD',
      version: 'v02',
      description: 'Explore events in the FCC-ee ILD detector concept.',
      logo: 'assets/images/ild_logo_transparent.png',
      logoAlt: 'ILD Logo',
      path: 'fccee-ild',
      rootFile: 'ILD_FCCee_v02.root',
    },
    {
      name: 'FCC-hh Baseline',
      description: 'Explore events in the FCC-hh Baseline detector concept.',
      logo: 'assets/images/fcchh_baseline_logo_transparent.png',
      logoAlt: 'FCC-hh Baseline',
      path: 'fcchh-baseline',
      rootFile: 'FCChh_DectMaster.root',
    },
  ];

  constructor() {
    this.year = new Date().getFullYear();
    this.eventDisplay.getThreeManager().stopAnimationLoop();
  }

  ngAfterViewInit() {
    this.eventDisplay.getUIManager().detectColorScheme();
  }
}
