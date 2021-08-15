import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Stepper  from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function getSteps(): string[]{
  return [
    'Form 1',
    'Form 2',
    'Form 3'
  ]
}

function getStepContent(stepIndex: number){
  switch(stepIndex){
    case 0:
      return 'Form 1 のコンテンツを表示';
    case 1:
      return 'Form 2 のコンテンツを表示';
    case 2:
      return 'Form 3 のコンテンツを表示';
    default:
      return 'Unknown stepIndex'
  }
}

function Content(): JSX.Element{
    const initialValue: number = 0;
    const [activeStep, setActiveStep] = useState<number>(initialValue);
    const steps = getSteps();

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
      setActiveStep((prevActivStep) => prevActivStep - 1);
    }
    const handleReset = () => {
      setActiveStep(initialValue);
    }

    return (
        <Grid container>
            <Grid sm={2}/>
            <Grid lg={8} sm={8} spacing={10}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length ? (
                  <div>
                    <Typography>全ステップの表示を完了</Typography>
                    <Button onClick={handleReset}>リセット</Button>
                  </div>
                ) : (
                  <div>
                    <Typography>{getStepContent(activeStep)}</Typography>
                    <Button 
                      disabled={activeStep===0}
                      onClick={handleBack}
                    >
                      戻る
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                      {activeStep === steps.length -1 ? '送信' :　'次へ'}
                    </Button>
                  </div>
                )}
            </Grid>
        </Grid>
    )
}

export default Content
