import { useLocale } from '@calcom/lib/hooks/useLocale';
import { Button } from '@calcom/ui'
import React from 'react'

const GetStarted = () => {
    const { t, i18n } = useLocale();

  return (
    <div className="bg-default p-14">
        <div className='p-5 w-full flex flex-col items-center justify-center'>
            <h1 className='text-emphasis font-black text-4xl mb-2'>Power Up Your Scheduling</h1>
            <p className="text-default text-center text-lg font-light leading-normal">
                Get started with the world's leading Scheduling Automation Platform
                <br/> in seconds – for free.
            </p>

            <div className="flex gap-5 mt-10">
                <Button
                    color="primary"
                    size="lg"
                >
                    Create An Account
                </Button>

                <Button
                    color="secondary"
                    size="lg"
                >
                    I Have An Account
                </Button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted