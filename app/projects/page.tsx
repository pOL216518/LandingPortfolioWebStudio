import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const revalidate = 60;

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Проекты
          </h2>
          <p className="mt-4 text-zinc-400">
            Мы рады представить вам нашу коллекцию проектов, созданных с
            использованием новейших технологий и инновационных решений. Наша
            веб-студия специализируется на разработке адаптивных, креативных и
            функциональных сайтов для бизнеса, стартапов и личных нужд. 
          </p>
          <p className="mt-4 text-zinc-400">
            В каждом проекте мы стремимся сочетать уникальный дизайн, удобный
            пользовательский интерфейс и высокую производительность. Мы понимаем,
            что каждый проект требует индивидуального подхода, и поэтому
            работаем в тесном сотрудничестве с клиентами, чтобы превратить их
            идеи в реальность.
          </p>
          <p className="mt-4 text-zinc-400">
            Независимо от того, хотите ли вы создать небольшой корпоративный
            сайт или полноценную платформу, наша команда готова предложить
            решение, которое идеально подойдет для вашего бизнеса.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <h2
                className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl font-display"
              >
                Функциональные возможности
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400">
                Мы предлагаем широкий спектр услуг: от разработки простых лендингов
                до сложных e-commerce решений с интеграцией платежных систем.
              </p>
            </article>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  className="mt-4 text-2xl font-bold text-zinc-100 sm:text-3xl font-display"
                >
                  Проект : Корпоративный сайт
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400">
                  Разработка корпоративного сайта с персонализированным дизайном и
                  адаптивностью для всех устройств. Проект включает интеграцию
                  с социальными сетями.
                </p>
              </article>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  className="mt-4 text-2xl font-bold text-zinc-100 sm:text-3xl font-display"
                >
                  Проект : Онлайн магазин
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400">
                  Создание интернет-магазина с возможностью покупки товаров
                  онлайн, интеграция с системой учета и автоматизация процессов
                  для удобства покупок.
                </p>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
