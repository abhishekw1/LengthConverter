import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LengthConverter';
  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km',
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm',
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm',
    },
  ];
  rightLenValue: number = 0;
  leftLenValue: number = 0;
  leftUnit: string = 'cm';
  rightUnit: string = 'm';

  unitConversions: any = {
    cm: { m: 0.01, km: 0.00001 },
    m: { cm: 100, km: 0.001 },
    km: { cm: 100000, m: 1000 },
    //as per your requirement , can add more units here and same unit update in the lengthOptions
  };

  onSelectleftValue(value?: boolean) {
    this.rightLenValue = this.convertLength(
      this.leftLenValue,
      this.leftUnit,
      this.rightUnit
    );
  }

  onSelectrightValue(value?: boolean) {
    if (value) {
      this.rightLenValue = this.convertLength(
        this.leftLenValue,
        this.leftUnit,
        this.rightUnit
      );
    } else {
      this.leftLenValue = this.convertLength(
        this.rightLenValue,
        this.rightUnit,
        this.leftUnit
      );
    }
  }

  private convertLength(
    value: number,
    fromUnit: string,
    toUnit: string
  ): number {
    if (fromUnit === toUnit) {
      return value;
    }

    const conversionFactor = this.unitConversions[fromUnit][toUnit];
    if (conversionFactor !== undefined) {
      return value * conversionFactor;
    }

    return value; // return the same value
  }
}
